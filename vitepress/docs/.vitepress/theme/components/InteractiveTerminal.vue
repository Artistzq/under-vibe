<template>
  <div class="iterm" @keydown="handleGlobalKeydown" tabindex="0" ref="container">
    <!-- title bar -->
    <div class="iterm-titlebar">
      <div class="iterm-dots">
        <span class="iterm-dot iterm-dot--red" />
        <span class="iterm-dot iterm-dot--yellow" />
        <span class="iterm-dot iterm-dot--green" />
      </div>
      <span class="iterm-title">terminal — zsh</span>
    </div>

    <!-- body -->
    <div class="iterm-body" ref="body" @click="focusInput">
      <div v-for="(line, i) in lines" :key="i" class="iterm-line">
        <template v-if="line.type === 'input'">
          <span class="iterm-prompt">{{ line.prompt }}</span>
          <span class="iterm-cmd">{{ line.text }}</span>
        </template>
        <template v-else-if="line.type === 'error'">
          <span class="iterm-error">{{ line.text }}</span>
        </template>
        <template v-else-if="line.type === 'info'">
          <span class="iterm-info">{{ line.text }}</span>
        </template>
        <template v-else>
          <span>{{ line.text }}</span>
        </template>
      </div>

      <!-- current input -->
      <div class="iterm-line iterm-current">
        <span class="iterm-prompt">{{ prompt }}</span>
        <span class="iterm-cmd">{{ displayInput }}</span>
        <span class="iterm-cursor" :class="{ 'iterm-cursor--blink': !composing }">▊</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const container = ref(null)
const body = ref(null)
const lines = ref([])
const input = ref('')
const composing = ref(false)
const hist = ref([])
const histIdx = ref(-1)

const home = '/Users/yourname'
const cwd = ref(home)
const fs = ref(createFS())

function createFS() {
  return {
    type: 'dir',
    children: {
      Desktop: { type: 'dir', children: {} },
      Downloads: { type: 'dir', children: {} },
      Documents: {
        type: 'dir',
        children: {
          'hello.txt': { type: 'file', content: 'Hello, world!' },
          'project-notes.md': { type: 'file', content: '# Notes\n\nThis is my first project.' },
        },
      },
      Projects: { type: 'dir', children: {} },
      '.zshrc': { type: 'file', content: '# Zsh config\nexport PATH=$HOME/bin:$PATH' },
    },
  }
}

const displayInput = computed(() => input.value)

const prompt = computed(() => `${cwd.value.replace(home, '~')} %`)

function resolveDir(base, path) {
  if (!path || path === '.') return base
  const parts = path.split('/').filter(Boolean)
  let node = getNode(base)
  for (const p of parts) {
    if (p === '..') {
      const parent = base.substring(0, base.lastIndexOf('/')) || '/'
      base = parent || '/'
      node = getNode(base)
    } else if (p === '~' || p === home) {
      base = home
      node = getNode(base)
    } else if (p === '') {
      base = '/'
      node = getNode(base)
    } else {
      if (!node || node.type !== 'dir' || !node.children[p]) return null
      base = base === '/' ? `/${p}` : `${base}/${p}`
      node = node.children[p]
    }
  }
  return base
}

function getNode(path) {
  if (path === '/') return { type: 'dir', children: { Users: { type: 'dir', children: { yourname: fs.value } } } }
  const parts = path.split('/').filter(Boolean)
  let node = { type: 'dir', children: { Users: { type: 'dir', children: { yourname: fs.value } } } }
  for (const p of parts) {
    if (!node.children || !node.children[p]) return null
    node = node.children[p]
  }
  return node
}

function getNodeFromFS(path) {
  if (path === home) return fs.value
  const rel = path.replace(home, '').replace(/^\//, '')
  if (!rel) return fs.value
  const parts = rel.split('/').filter(Boolean)
  let node = fs.value
  for (const p of parts) {
    if (!node.children || !node.children[p]) return null
    node = node.children[p]
  }
  return node
}

function nodeExists(path) {
  return getNodeFromFS(path) !== null
}

function isDir(path) {
  const node = getNodeFromFS(path)
  return node && node.type === 'dir'
}

function writeLine(text, type = 'output') {
  lines.value.push({ text, type })
}

function writePrompt(cmd) {
  lines.value.push({ text: cmd, type: 'input', prompt: prompt.value })
}

function lsDir(dirPath) {
  const node = getNodeFromFS(dirPath)
  if (!node || node.type !== 'dir') return []
  const entries = Object.entries(node.children)
  const dirs = entries.filter(([, v]) => v.type === 'dir').map(([k]) => k + '/')
  const files = entries.filter(([, v]) => v.type === 'file').map(([k]) => k)
  return [...dirs, ...files]
}

function exec(cmdRaw) {
  const trimmed = cmdRaw.trim()
  if (!trimmed) return
  writePrompt(trimmed)

  hist.value.push(trimmed)
  histIdx.value = -1

  // split by first space
  const spaceIdx = trimmed.indexOf(' ')
  const cmd = spaceIdx === -1 ? trimmed.toLowerCase() : trimmed.substring(0, spaceIdx).toLowerCase()
  const args = spaceIdx === -1 ? '' : trimmed.substring(spaceIdx + 1).trim()

  const cmds = {
    pwd: () => writeLine(cwd.value),

    ls: () => {
      const dir = args || '.'
      const target = resolveDir(cwd.value, dir)
      if (!target) {
        writeLine(`ls: ${dir}: No such file or directory`, 'error')
        return
      }
      if (!isDir(target)) {
        writeLine(`ls: ${dir}: Not a directory`, 'error')
        return
      }
      const entries = lsDir(target)
      if (entries.length === 0) {
        writeLine('')
        return
      }
      writeLine(entries.join('  '))
    },

    cd: () => {
      const target = args ? args : home
      const resolved = resolveDir(cwd.value, target)
      if (!resolved) {
        writeLine(`cd: no such file or directory: ${args}`, 'error')
        return
      }
      if (!isDir(resolved)) {
        writeLine(`cd: not a directory: ${args}`, 'error')
        return
      }
      cwd.value = resolved
    },

    clear: () => {
      lines.value = []
    },

    help: () => {
      writeLine('可用命令：')
      writeLine('  pwd          显示当前所在目录')
      writeLine('  ls [目录]    列出目录内容')
      writeLine('  cd [目录]    切换目录')
      writeLine('  clear        清屏')
      writeLine('  mkdir <名>   创建目录')
      writeLine('  touch <名>   创建文件')
      writeLine('  cat <文件>   查看文件内容')
      writeLine('  echo [文字]  输出文字')
      writeLine('  rm <名>      删除文件')
      writeLine('  help         显示此帮助')
      writeLine('')
      writeLine('💡 试试 pwd、ls、cd，不会弄坏任何东西！')
    },

    mkdir: () => {
      if (!args) { writeLine('mkdir: missing operand', 'error'); return }
      const parts = args.split('/').filter(Boolean)
      const name = parts.pop()
      const parentDir = parts.length > 0 ? parts.join('/') : '.'
      const parentPath = resolveDir(cwd.value, parentDir)
      if (!parentPath) { writeLine(`mkdir: ${parentDir}: No such file or directory`, 'error'); return }
      const parent = getNodeFromFS(parentPath)
      if (!parent || parent.type !== 'dir') { writeLine(`mkdir: ${parentDir}: Not a directory`, 'error'); return }
      if (parent.children[name]) { writeLine(`mkdir: ${name}: File exists`, 'error'); return }
      parent.children[name] = { type: 'dir', children: {} }
    },

    touch: () => {
      if (!args) { writeLine('touch: missing operand', 'error'); return }
      const parts = args.split('/').filter(Boolean)
      const name = parts.pop()
      const parentDir = parts.length > 0 ? parts.join('/') : '.'
      const parentPath = resolveDir(cwd.value, parentDir)
      if (!parentPath) { writeLine(`touch: ${parentDir}: No such file or directory`, 'error'); return }
      const parent = getNodeFromFS(parentPath)
      if (!parent || parent.type !== 'dir') { writeLine(`touch: ${parentDir}: Not a directory`, 'error'); return }
      if (!parent.children[name]) {
        parent.children[name] = { type: 'file', content: '' }
      }
      // touch updates timestamp (mock)
    },

    cat: () => {
      if (!args) { writeLine('cat: missing operand', 'error'); return }
      const filePath = resolveDir(cwd.value, args)
      if (!filePath) { writeLine(`cat: ${args}: No such file or directory`, 'error'); return }
      const node = getNodeFromFS(filePath)
      if (!node) { writeLine(`cat: ${args}: No such file or directory`, 'error'); return }
      if (node.type === 'dir') { writeLine(`cat: ${args}: Is a directory`, 'error'); return }
      writeLine(node.content || '')
    },

    echo: () => {
      if (!args) { writeLine(''); return }
      // handle > redirect
      const redirectMatch = args.match(/^(.*?)\s*>\s*(.+)$/)
      if (redirectMatch) {
        const content = redirectMatch[1].replace(/^["']|["']$/g, '')
        const file = redirectMatch[2].trim()
        const filePath = resolveDir(cwd.value, file)
        if (!filePath) { writeLine(`echo: ${file}: No such file or directory`, 'error'); return }
        const parts = filePath.replace(cwd.value, '').split('/').filter(Boolean)
        const fileName = parts.pop()
        const parentDirPath = parts.length > 0 ? `${cwd.value}/${parts.join('/')}` : cwd.value
        const parent = getNodeFromFS(parentDirPath)
        if (!parent || parent.type !== 'dir') { writeLine(`echo: ${file}: Cannot create file`, 'error'); return }
        parent.children[fileName] = { type: 'file', content }
        return
      }
      writeLine(args.replace(/^["']|["']$/g, ''))
    },

    rm: () => {
      if (!args) { writeLine('rm: missing operand', 'error'); return }
      // support -rf flag (silently ignore flags for simplicity)
      let target = args
      if (target.startsWith('-')) {
        target = target.replace(/^-\w+\s*/, '')
      }
      if (!target) { writeLine('rm: missing operand', 'error'); return }
      const filePath = resolveDir(cwd.value, target)
      if (!filePath) { writeLine(`rm: ${target}: No such file or directory`, 'error'); return }
      const parentDir = filePath.substring(0, filePath.lastIndexOf('/')) || '/'
      const name = filePath.split('/').pop()
      const parent = getNodeFromFS(parentDir)
      if (parent && parent.children) {
        delete parent.children[name]
      }
    },

    cp: () => {
      const parts = args.split(/\s+/)
      if (parts.length < 2) { writeLine('cp: missing operand', 'error'); return }
      const [src, dst] = parts
      const srcPath = resolveDir(cwd.value, src)
      if (!srcPath) { writeLine(`cp: ${src}: No such file or directory`, 'error'); return }
      const srcNode = getNodeFromFS(srcPath)
      if (!srcNode) { writeLine(`cp: ${src}: No such file or directory`, 'error'); return }
      const dstPath = resolveDir(cwd.value, dst)
      const dstParts = dstPath ? dstPath.split('/').filter(Boolean) : []
      const dstName = dstParts.pop()
      const dstParentPath = dstParts.length > 0 ? `/${dstParts.join('/')}` : '/'
      const dstParent = dstPath ? getNodeFromFS(dstPath) : null
      if (dstParent && dstParent.type === 'dir') {
        // copy into directory
        const name = srcPath.split('/').pop()
        dstParent.children[name] = JSON.parse(JSON.stringify(srcNode))
        return
      }
      const parentDir = dstPath ? dstPath.substring(0, dstPath.lastIndexOf('/')) || '/' : '/'
      const parent = getNodeFromFS(parentDir)
      if (parent && parent.children) {
        parent.children[dstName] = JSON.parse(JSON.stringify(srcNode))
      }
    },

    mv: () => {
      const parts = args.split(/\s+/)
      if (parts.length < 2) { writeLine('mv: missing operand', 'error'); return }
      const [src, dst] = parts
      const srcPath = resolveDir(cwd.value, src)
      if (!srcPath) { writeLine(`mv: ${src}: No such file or directory`, 'error'); return }
      const srcNode = getNodeFromFS(srcPath)
      if (!srcNode) { writeLine(`mv: ${src}: No such file or directory`, 'error'); return }
      const srcParentDir = srcPath.substring(0, srcPath.lastIndexOf('/')) || '/'
      const srcName = srcPath.split('/').pop()
      const srcParent = getNodeFromFS(srcParentDir)

      const dstPath = resolveDir(cwd.value, dst)
      const dstParent = dstPath ? getNodeFromFS(dstPath) : null
      if (dstParent && dstParent.type === 'dir') {
        // move into directory
        dstParent.children[srcName] = srcNode
        delete srcParent.children[srcName]
        return
      }
      // rename / move
      const dstParts = dst.split('/').filter(Boolean)
      const dstName = dstParts.pop()
      const dstParentDir = dstParts.length > 0 ? resolveDir(cwd.value, dstParts.join('/')) : cwd.value
      const dstParentNode = getNodeFromFS(dstParentDir)
      if (dstParentNode && dstParentNode.children) {
        dstParentNode.children[dstName] = srcNode
        delete srcParent.children[srcName]
      }
    },
  }

  if (cmds[cmd]) {
    cmds[cmd]()
  } else {
    writeLine(`zsh: command not found: ${cmd}`, 'error')
  }
}

function focusInput() {
  container.value?.focus()
}

function handleGlobalKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    const cmd = input.value
    input.value = ''
    exec(cmd)
    nextTick(() => {
      body.value.scrollTop = body.value.scrollHeight
    })
    return
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (hist.value.length === 0) return
    const newIdx = histIdx.value === -1 ? hist.value.length - 1 : Math.max(0, histIdx.value - 1)
    histIdx.value = newIdx
    input.value = hist.value[newIdx]
    return
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (histIdx.value === -1) return
    const newIdx = histIdx.value + 1
    if (newIdx >= hist.value.length) {
      histIdx.value = -1
      input.value = ''
      return
    }
    histIdx.value = newIdx
    input.value = hist.value[newIdx]
    return
  }

  if (e.key === 'Tab') {
    e.preventDefault()
    // simple tab complete: complete command or directory/file names
    const parts = input.value.split(/\s+/)
    if (parts.length === 1 && !input.value.includes(' ')) {
      // complete command
      const partial = parts[0].toLowerCase()
      const cmds = ['pwd', 'ls', 'cd', 'clear', 'mkdir', 'touch', 'cat', 'echo', 'rm', 'cp', 'mv', 'help']
      const matches = cmds.filter(c => c.startsWith(partial))
      if (matches.length === 1) {
        input.value = matches[0] + ' '
      } else if (matches.length > 1) {
        writeLine(matches.join('  '), 'info')
      }
      return
    }
    // complete file/dir path
    const lastPart = parts[parts.length - 1]
    const dir = cwd.value
    const entries = lsDir(dir)
    const matches = entries.filter(e => e.startsWith(lastPart))
    if (matches.length === 1) {
      const prefix = parts.slice(0, -1).join(' ')
      input.value = prefix ? `${prefix} ${matches[0]}` : matches[0]
    } else if (matches.length > 1) {
      writeLine(matches.join('  '), 'info')
    }
    return
  }

  if (e.key === 'l' && e.ctrlKey) {
    e.preventDefault()
    lines.value = []
    return
  }

  if (e.key === 'u' && e.ctrlKey) {
    e.preventDefault()
    input.value = ''
    return
  }

  if (e.key === 'c' && e.ctrlKey) {
    e.preventDefault()
    writeLine('^C', 'info')
    input.value = ''
    return
  }

  // printable chars
  if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault()
    input.value += e.key
    return
  }

  // backspace
  if (e.key === 'Backspace') {
    e.preventDefault()
    input.value = input.value.slice(0, -1)
    return
  }
}

onMounted(() => {
  writeLine('欢迎！这是一个沙盒终端，你可以在这里安全地练习命令。')
  writeLine('试试 pwd、ls、cd —— 不会影响你的真实电脑。')
  writeLine('输入 help 查看所有可用命令。')
  writeLine('')
})
</script>

<style scoped>
.iterm {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  font-family: 'SF Mono', 'Cascadia Code', 'Fira Code', 'JetBrains Mono', Menlo, Monaco, monospace;
  font-size: 14px;
  line-height: 1.6;
  margin: 1.5rem 0;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.iterm-titlebar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #1c1c1e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  -webkit-user-select: none;
  user-select: none;
}

.iterm-dots {
  display: flex;
  gap: 7px;
}

.iterm-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.iterm-dot--red { background: #ff5f57; }
.iterm-dot--yellow { background: #ffbd2e; }
.iterm-dot--green { background: #28c840; }

.iterm-title {
  flex: 1;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 500;
}

.iterm-body {
  background: #1a1a1e;
  color: #e4e4e7;
  padding: 16px 18px;
  min-height: 320px;
  max-height: 520px;
  overflow-y: auto;
  cursor: text;
}

.iterm-body::-webkit-scrollbar {
  width: 6px;
}

.iterm-body::-webkit-scrollbar-track {
  background: transparent;
}

.iterm-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 3px;
}

.iterm-line {
  white-space: pre-wrap;
  word-break: break-all;
  min-height: 1.4em;
}

.iterm-current {
  display: flex;
  align-items: center;
}

.iterm-prompt {
  color: #50fa7b;
  flex-shrink: 0;
  margin-right: 6px;
}

.iterm-cmd {
  color: #f8f8f2;
}

.iterm-cursor {
  color: rgba(248, 248, 242, 0.5);
  font-size: 0.9em;
  margin-left: 1px;
  animation: blink 1s step-start infinite;
}

.iterm-cursor--blink {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.iterm-error {
  color: #ff5555;
}

.iterm-info {
  color: #8be9fd;
}

.iterm-body .iterm-line:first-child {
  margin-top: 0;
}
</style>
