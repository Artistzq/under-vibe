# 文件系统：路径是怎么回事

<div align="center">

**文件在电脑里的"地址"**

绝对路径 · 相对路径 · `..` · `~` · Windows 盘符

</div>

## 前言

命令里的参数常常是路径，比如 `cd Documents`、`cat hello.txt`。这里的 `Documents` 就是一个路径。路径（Path）就是文件或文件夹在电脑里的"地址"：告诉电脑"这个文件在哪个文件夹、几层深"。本篇讲清楚路径是怎么回事。

> 💡 **场景重现**
>
> AI 对你说："`cd ~/my-project`，然后 `ls` 看看"
>
> 你："`~` 是什么？`/` 和 `\` 有什么区别？为什么有的路径以 `/` 开头？"

::: tip 💡 先记住一句话
**路径**就是"文件在哪里"。理解路径，只需要搞清楚两件事：**从哪儿开始**（绝对还是相对），以及**经过哪些层级**（目录套目录）。
:::

## 文件是怎么组织起来的

### 1. 文件夹套文件夹：目录树

电脑里的所有文件，都存在一层层"文件夹套文件夹"的结构里，这个结构叫**目录树**（Directory Tree，就是平时说的"文件夹层级"）：

```mermaid
graph TD
    classDef u fill:#e6f7ff,stroke:#1890ff
    classDef t fill:#f0f2f5,stroke:#333
    classDef s fill:#fff7e6,stroke:#fa8c16
    classDef k fill:#fef0f0,stroke:#f5222d

    root[/ / 最顶层/]:::u --> users[Users<br/>用户]
    users --> you[yourname<br/>你的主文件夹]
    you --> docs[Documents]
    you --> proj[my-project]
    docs --> hello[hello.txt]
    proj --> src[src]
    proj --> readme[README.md]
```

每个文件夹都"住在"它的上一层里，这个上一层叫**父目录**（Parent Directory，即上一级文件夹）。最顶层那个没有上层的文件夹叫**根目录**（Root Directory，macOS/Linux 下写作 `/`）。

::: tip 💡 类比
目录树就像一栋大楼：楼有楼层，楼层有房间，房间里摆着文件柜。根目录是大楼入口，路径就是"从入口走哪条路线到某个文件柜"。
:::

### 2. 什么是路径

路径就是用一串字符，描述"从某个起点走到目标文件，依次经过哪些文件夹"。文件夹之间用分隔符隔开：

```text
/Users/yourname/Documents/hello.txt
```

分隔符的作用是把每一级文件夹名串起来：macOS / Linux 用 `/`，Windows 用 `\`。

::: tip 💡 路径里的分隔符
macOS / Linux 写 `/`，Windows 写 `\`，方向不一样。这是两个系统各自的约定，记住你用的系统用哪个就行。
:::

## 绝对路径与相对路径

### 1. 绝对路径（Absolute Path）

从最顶层的根目录写起，给出文件的"完整地址"。它不管你现在站在哪个文件夹，任何时候都指向同一个文件：

```bash
# macOS / Linux
cat /Users/yourname/Documents/hello.txt

# Windows PowerShell
Get-Content C:\Users\yourname\Documents\hello.txt
```

**Windows 的盘符**：Windows 把每个磁盘分区当作一个独立的顶层，路径以盘符（Drive Letter，如 `C:`、`D:`）开头；macOS / Linux 只有一个顶层 `/`。

### 2. 相对路径（Relative Path）

从"当前所在的文件夹"写起，描述"从现在的位置怎么走"。同样的路径写法，站在不同文件夹时指向的是不同文件：

```bash
# 假设当前在 /Users/yourname
cd Documents            # 进入当前文件夹下的 Documents
cat Documents/hello.txt # 读取当前文件夹下 Documents 里的文件
```

::: tip 💡 怎么判断是哪种？
macOS / Linux 以 `/` 开头、Windows 以盘符（`C:` 等）开头的是绝对路径；否则就是相对路径。两种写法可能指向同一个文件。
:::

### 3. 三个特殊记号

| 记号 | 含义 | 例子 |
|------|------|------|
| `.` | 当前所在的文件夹 | `ls .` |
| `..` | 上一层（父）文件夹 | `cd ..` |
| `~` | 你的主文件夹 | `cd ~` |

```bash
# macOS / Linux
cd ..            # 回到上一层文件夹
ls .             # 列出当前文件夹（等价于 ls）
cd ~             # 回到主文件夹，等价于 cd /Users/yourname
cd ~/Documents   # 主文件夹下的 Documents

# Windows PowerShell
Set-Location ..            # 回到上一层
Get-ChildItem .            # 列出当前文件夹
Set-Location ~             # 回到主文件夹
Set-Location ~\Documents
```

::: tip 💡 主文件夹（Home Directory）
`~` 指当前用户的主文件夹：macOS 为 `/Users/<用户名>`，Windows 为 `C:\Users\<用户名>`，Linux 为 `/home/<用户名>`。新开的终端默认就停在你的主文件夹。
:::

## 常用路径写法

### macOS / Linux 与 Windows PowerShell 对照

<div class="tabs">
  <div class="tabs-nav">
    <div class="tabs-nav-item active" data-tab="mac">macOS / Linux</div>
    <div class="tabs-nav-item" data-tab="win">Windows PowerShell</div>
  </div>
  <div class="tabs-content">
    <div class="tabs-panel active" id="tab-mac">
      <table>
        <thead><tr><th>写法</th><th>含义</th></tr></thead>
        <tbody>
          <tr><td><code>/</code></td><td>根目录（唯一的最顶层）</td></tr>
          <tr><td><code>~</code></td><td>主文件夹，如 <code>/Users/yourname</code></td></tr>
          <tr><td><code>.</code></td><td>当前文件夹</td></tr>
          <tr><td><code>..</code></td><td>上一层文件夹</td></tr>
          <tr><td><code>/Users/you/a.txt</code></td><td>绝对路径</td></tr>
          <tr><td><code>a.txt</code></td><td>相对路径（相对当前文件夹）</td></tr>
        </tbody>
      </table>
    </div>
    <div class="tabs-panel" id="tab-win">
      <table>
        <thead><tr><th>写法</th><th>含义</th></tr></thead>
        <tbody>
          <tr><td><code>C:\</code></td><td>C 盘的最顶层（每个盘一个）</td></tr>
          <tr><td><code>~</code></td><td>主文件夹，如 <code>C:\Users\yourname</code></td></tr>
          <tr><td><code>.</code></td><td>当前文件夹</td></tr>
          <tr><td><code>..</code></td><td>上一层文件夹</td></tr>
          <tr><td><code>C:\Users\you\a.txt</code></td><td>绝对路径</td></tr>
          <tr><td><code>a.txt</code></td><td>相对路径（相对当前文件夹）</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

::: tip 💡 PowerShell 也接受 `/`
PowerShell 对分隔符比较宽容，`C:/Users/yourname` 也能被识别。但为保持统一，Windows 上习惯用 `\`。
:::

## 原理简析

### 路径是怎么被一步步找到的

Shell 解析路径，本质是"从起点沿着目录树一层层往下找"：

```mermaid
graph LR
    classDef u fill:#e6f7ff,stroke:#1890ff
    classDef t fill:#f0f2f5,stroke:#333
    classDef s fill:#fff7e6,stroke:#fa8c16
    classDef k fill:#fef0f0,stroke:#f5222d
    classDef r fill:#f0fff4,stroke:#52c41a

    A[路径<br/>~/Documents/hello.txt]:::u -->|先把 ~ 展开成主文件夹| B[起点<br/>/Users/yourname]:::t
    B -->|进入第一层| C[Documents]:::s
    C -->|进入第二层| D[hello.txt]:::k
    D -->|每一层都存在| E[定位成功]:::r
```

::: tip 💡 相对路径从哪儿开始找
相对路径以"当前所在文件夹"为起点往下找；`..` 表示"先退回上一层再继续"，所以 `cd ../..` 是一次往上跳两层。
:::

### 为什么有时提示"找不到"

当目录树的某一段不存在，或名字写错了，Shell 会提示 `No such file or directory`（没有这个文件或文件夹）。常见原因：

- 文件名或文件夹名拼写错误
- 大小写不一致（macOS 默认不区分，Linux 严格区分）
- 你要找的那一层根本不存在

::: tip 💡 用 Tab 补全避免手误
输入路径时按 Tab 键自动补全（见第一篇"终端小技巧"），既能提速，也避免拼写错误。
:::

## 避坑指南

### 坑 1：混淆绝对与相对路径

```bash
# 假设当前在 /Users/yourname
cat /Documents/hello.txt   # 错误：从最顶层开始找 Documents
cat Documents/hello.txt    # 正确：相对当前文件夹
```

### 坑 2：分隔符用错

macOS / Linux 路径中写 `\` 会被当成普通字符；Windows 写 `/` 大多能被 PowerShell 容忍，但在其他工具里可能出问题。**macOS / Linux 用 `/`，Windows 用 `\`**。

### 坑 3：路径含空格没加引号

`cd My Project` 会被拆成"进入 `My`"，再把 `Project` 当成多余参数。含空格的路径要加引号：

```bash
cd "My Project"
```

### 坑 4：忽略大小写差异

Linux 下 `Hello.txt` 与 `hello.txt` 是两个不同文件。照抄 AI 给的路径时务必注意大小写。

### 坑 5：`~` 在部分工具中不生效

`~` 是 Shell 的快捷记号，由 Shell 负责展开。在配置文件、代码、某些命令行工具里 `~` 不会被识别成主文件夹，这时要写完整的 `/Users/yourname`。

::: tip 💡 怎么确认自己站在哪
`pwd` 显示当前所在文件夹的绝对路径；`ls -a` 能看到 `.` 与 `..` 这两个隐藏项，它们始终存在。
:::

## 拓展阅读

### 项目里有什么：为"环境"做准备

一个项目往往有几十上百个文件，其中既有源代码，也有配置文件、依赖清单等。真正动手做项目前，得先知道这些文件是干什么的——这就引出了"环境"（让代码跑起来需要的一整套软件）。

### 下一篇预告

`cd ~/my-project` 之后，你会看到 AI 说的"先配环境"：语言、运行时、包管理器到底指什么？为什么装个环境这么难？下一篇将讲解环境。

## 术语表

| 术语 | 意思 |
|-----|------|
| **文件系统 (File System)** | 电脑把文件分门别类存放的组织体系 |
| **目录树 (Directory Tree)** | 文件夹套文件夹的层级结构 |
| **路径 (Path)** | 描述文件或文件夹位置的字符串 |
| **绝对路径 (Absolute Path)** | 从最顶层写起的完整路径 |
| **相对路径 (Relative Path)** | 从当前文件夹写起的路径 |
| **根目录 (Root Directory)** | 目录树的最顶层，macOS/Linux 为 `/` |
| **主文件夹 (Home Directory)** | 当前用户自己的文件夹，用 `~` 表示 |
| **盘符 (Drive Letter)** | Windows 磁盘分区的标识，如 `C:` |
| **父目录** | 当前文件夹的上一层，用 `..` 表示 |
| **工作目录 (Working Directory)** | Shell 当前所在的文件夹，`pwd` 可查看 |
