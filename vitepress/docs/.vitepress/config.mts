import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Under Vibe',
  description: 'vibecoding 背后的计算机知识',
  markdown: {
    mermaid: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新手引导', link: '/start-here' }
    ],
    sidebar: [
      {
        text: '开篇',
        items: [
          { text: '为什么需要这些知识', link: '/' },
          { text: '不知道从哪开始？', link: '/start-here' }
        ]
      },
      {
        text: '第一阶段：开始新项目',
        items: [
          { text: '终端基础', link: '/docs/01-start-project/01-terminal-basics' },
          { text: '文件系统', link: '/docs/01-start-project/02-file-system' },
          { text: '安装依赖', link: '/docs/01-start-project/03-dependencies' }
        ]
      },
      {
        text: '第二阶段',
        items: [
          { text: '项目运行不起来', link: '/coming-soon' }
        ]
      },
      {
        text: '更多内容',
        items: [
          { text: '代码有问题', link: '/coming-soon' },
          { text: '保存分享代码', link: '/coming-soon' },
          { text: '卡壳了怎么办', link: '/coming-soon' },
          { text: '✨ 架构篇', link: '/coming-soon' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      label: '页面导航',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新'
    }
  }
})
