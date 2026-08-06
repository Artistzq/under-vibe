# 看懂一条命令：选项和参数

<div align="center">

**命令的结构：命令名 + 选项 + 参数**

`ls -la` · `--help` · `cd ..` · `-h` vs `--help`

</div>

## 前言

上一篇里的命令，像 `ls -la`、`cd Documents`，都不是一个单词，而是由好几段组成的。本篇就来拆解：一条命令到底由哪些部分组成，每一部分在干什么。

> 💡 **场景重现**
>
> AI 对你说："`ls -la` 看一下目录，`-a` 要带上"
>
> 你："`ls` 我认识，`-la` 是什么？为什么要带？"

::: tip 💡 先记住一句话
命令的通用写法是 `命令名 [选项] [参数]`：**命令名**决定"做什么"，**选项**决定"怎么做"，**参数**决定"对谁做"。
:::

## 命令的基本结构

### 1. 三个组成部分

一条命令就是让电脑做一件事。它通常由三部分组成：

| 组成部分 | 作用 | 例子 | 类比 |
|---------|------|------|------|
| 命令名（Command） | 让电脑执行哪个程序 | `ls` | 动作：打开文件夹 |
| 选项（Option / Flag） | 调整执行方式 | `-l`、`--all` | 副词：详细地、全部 |
| 参数（Argument） | 操作对象是谁 | `Documents`、`..` | 宾语：文件夹、上级目录 |

```text
ls    -la    Documents
命令名  选项   参数
```

::: tip 💡 类比
一条命令就像一句口语："**列出**（`ls`），**详细地、全部**（`-la`），对 **Documents 这个文件夹**（参数）"。
:::

### 2. 不是所有命令都长这样

`命令名 + 选项 + 参数` 是大部分命令行程序的**通用约定**，而不是必须遵守的强制语法。实际中有几种常见例外：

- **没有选项**：`cd Documents`、`pwd` 就没有选项，只有参数或什么都没有
- **只有选项**：`ls -la` 没有参数，默认对当前目录生效
- **顺序不固定**：多数命令选项和参数的先后无所谓，少数命令要求选项必须在前
- **自己写的小脚本**：你在项目里自己写的脚本（如 `./run.sh start`），选项和参数的写法完全由脚本作者自己定，不一定遵守上面的约定

所以看到一个不认识的命令，别假设它一定符合"标准格式"——用 `--help` 看它的说明才是可靠的办法。

### 3. 选项：短选项与长选项

选项用于微调命令行为，有两种写法：

| 形式 | 例子 | 说明 |
|------|------|------|
| 短选项（Short Option） | `-l`、`-a`、`-h` | 一个减号 `-` 加一个字母，简短 |
| 长选项（Long Option） | `--all`、`--help`、`--recursive` | 两个减号 `--` 加一个单词，语义更清楚 |

**短选项可以合并**：`ls -la` 等价于 `ls -l -a`，都表示"以详细格式列出全部内容"。

```bash
# 以下三条等价
ls -l -a
ls -la
ls -a -l
```

::: warning ⚠️ 注意
合并后的短选项顺序无关紧要，但如果选项本身需要带值（见下文），就不要盲目合并。
:::

### 4. 参数：命令操作的对象

参数紧随命令与选项之后，通常是没有 `-` 前缀的词或路径：

```bash
# 参数示例
cd Documents      # 参数：切换到 Documents 目录
cat hello.txt     # 参数：读取 hello.txt 文件
mkdir my-folder   # 参数：创建名为 my-folder 的目录
```

有些命令的参数可以省略，此时使用默认值。例如 `ls` 不带参数默认列出当前所在文件夹；`cd` 不带参数默认回到自己的主文件夹（Home Directory，即当前用户的家目录）。

::: tip 💡 怎么区分选项和参数？
一般规则：以 `-` 或 `--` 开头的分词是选项，其余是参数。个别命令对顺序敏感，先写选项、再写参数是最稳妥的写法。
:::

### 5. `-h` 与 `--help`：让命令自己告诉你

不确定一条命令怎么用，就让命令本身求助：

```bash
# macOS / Linux
ls --help        # 查看 ls 的用法摘要
ls -h            # 部分命令的短选项帮助

# Windows PowerShell
Get-ChildItem -?          # 查看用法摘要
Get-Help Get-ChildItem    # 查看详细帮助
```

::: tip 💡 需要注意
`-h` 在不同命令里含义不同：在 `ls` 中 `-h` 是"人类可读大小"（human-readable），在多数命令中才是"帮助"（help）。而 `--help` 的语义几乎总是"帮助"，所以不确定时优先用 `--help`。
:::

::: tip 💡 更完整的帮助
`--help` 只显示用法摘要；macOS / Linux 可以用 `man <命令>`（manual，手册）查看更详尽的官方说明。
:::

### 6. 选项也可以带值

有些选项自己需要一个值，称为"带参数选项"：

```bash
# macOS / Linux
head -n 10 hello.txt        # -n 选项需要行数值，这里是 10
tail -n 5 hello.txt         # 查看末尾 5 行
grep -i "error" log.txt     # -i 表示忽略大小写

# Windows PowerShell
Get-Content hello.txt -TotalCount 10   # 查看前 10 行
Get-Content hello.txt -Tail 5          # 查看末尾 5 行
Select-String -CaseSensitive:$false "error" log.txt
```

带参数选项的长格式写法：

```bash
# 等价写法
head --lines=10 hello.txt    # 长选项用 = 连接值
head -n 10 hello.txt         # 短选项用空格连接值
```

::: warning ⚠️ 注意
长选项带值用 `--lines=10`，短选项带值用 `-n 10`。如果漏掉这个值，命令可能报错，或把下一个词误当成值。
:::

## 常见命令的选项对照

### macOS / Linux 与 Windows PowerShell 双栏对照

<div class="tabs">
  <div class="tabs-nav">
    <div class="tabs-nav-item active" data-tab="mac">macOS / Linux</div>
    <div class="tabs-nav-item" data-tab="win">Windows PowerShell</div>
  </div>
  <div class="tabs-content">
    <div class="tabs-panel active" id="tab-mac">
      <table>
        <thead><tr><th>命令</th><th>常用选项</th><th>作用</th></tr></thead>
        <tbody>
          <tr><td><code>ls</code></td><td><code>-l</code></td><td>长格式，显示权限/大小/时间等详细信息</td></tr>
          <tr><td><code>ls</code></td><td><code>-a</code></td><td>显示隐藏文件</td></tr>
          <tr><td><code>ls</code></td><td><code>-h</code></td><td>大小以人类可读单位显示（配合 -l）</td></tr>
          <tr><td><code>ls</code></td><td><code>-R</code></td><td>递归列出子目录</td></tr>
          <tr><td><code>cd</code></td><td><code>-</code></td><td>回到上一个目录</td></tr>
          <tr><td><code>rm</code></td><td><code>-r</code></td><td>递归删除目录</td></tr>
          <tr><td><code>rm</code></td><td><code>-f</code></td><td>强制删除，不提示</td></tr>
          <tr><td><code>cp</code></td><td><code>-r</code></td><td>递归复制目录</td></tr>
          <tr><td><code>mv</code></td><td><code>-i</code></td><td>覆盖前询问确认</td></tr>
          <tr><td><code>mkdir</code></td><td><code>-p</code></td><td>逐级创建中间目录</td></tr>
          <tr><td><code>grep</code></td><td><code>-i</code></td><td>忽略大小写</td></tr>
          <tr><td><code>grep</code></td><td><code>-r</code></td><td>递归搜索目录</td></tr>
          <tr><td><code>--help</code></td><td>—</td><td>几乎所有命令通用：查看用法摘要</td></tr>
        </tbody>
      </table>
    </div>
    <div class="tabs-panel" id="tab-win">
      <table>
        <thead><tr><th>命令</th><th>常用选项</th><th>作用</th></tr></thead>
        <tbody>
          <tr><td><code>Get-ChildItem</code></td><td><code>-Force</code></td><td>显示隐藏文件</td></tr>
          <tr><td><code>Get-ChildItem</code></td><td><code>-Recurse</code></td><td>递归列出子目录</td></tr>
          <tr><td><code>Set-Location</code></td><td>—</td><td>切换目录（别名 <code>cd</code>）</td></tr>
          <tr><td><code>Remove-Item</code></td><td><code>-Recurse</code></td><td>递归删除目录</td></tr>
          <tr><td><code>Remove-Item</code></td><td><code>-Force</code></td><td>强制删除，不提示</td></tr>
          <tr><td><code>Copy-Item</code></td><td><code>-Recurse</code></td><td>递归复制目录</td></tr>
          <tr><td><code>Move-Item</code></td><td><code>-Force</code></td><td>覆盖前不提示</td></tr>
          <tr><td><code>New-Item</code></td><td><code>-ItemType Directory</code></td><td>创建目录（别名 <code>mkdir</code>）</td></tr>
          <tr><td><code>Select-String</code></td><td><code>-CaseSensitive:$false</code></td><td>忽略大小写</td></tr>
          <tr><td><code>-?</code></td><td>—</td><td>PowerShell 通用：查看命令用法摘要</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

::: tip 💡 Windows 的选项风格
PowerShell 的命令名多为"动词-名词"结构（如 `Get-ChildItem`），选项以 `-` 加单词表示（如 `-Recurse`）。多数常用命令保留别名（alias，即简写）：`ls`、`cd`、`cp` 在 PowerShell 中也能用。
:::

## 原理简析

### Shell 是如何理解你输入的命令的

当你敲下回车，Shell（上一篇提过的"命令解释器"）会按顺序处理这条输入：

```mermaid
graph LR
    classDef u fill:#e6f7ff,stroke:#1890ff
    classDef t fill:#f0f2f5,stroke:#333
    classDef s fill:#fff7e6,stroke:#fa8c16
    classDef k fill:#fef0f0,stroke:#f5222d
    classDef r fill:#f0fff4,stroke:#52c41a

    A[原始输入<br/>ls -la Documents]:::u -->|按空格拆开| B[拆成几段<br/>'ls'、'-la'、'Documents']:::t
    B -->|第一段是命令名| C[找到对应的程序]:::s
    C -->|其余分段| D['-la' 当选项<br/>'Documents' 当参数]:::k
    D -->|传给程序执行| E[程序干活并输出结果]:::r
```

::: tip 🛵 打个比方
Shell 解析命令，就像服务员记点单：先看顾客点了哪道菜（命令名），再问"加辣吗？"（选项），最后记下"哪个座位"（参数），然后交给后厨执行。
:::

### 为什么选项常以 `-` 开头

`-` 是程序员们约定俗成的标记，用来区分"修饰"（选项）和"内容"（参数）。绝大多数命令行程序遵循同一套近似的约定，所以 `-l`、`--help` 这类写法在不同命令之间很一致，学会了就能举一反三。

::: tip 💡 例外与变体
- 少部分命令要求选项必须写在参数前面
- 个别工具用 `/` 开头写选项（历史遗留，如 Windows 的 `dir /a`）
- 现代命令普遍支持 `--` 分隔符：`--` 之后的内容一律按参数处理，即使它长得像选项
:::

### 命令名从哪里找：PATH

输入 `ls` 时，Shell 一开始并不知道 `ls` 是什么。它会按环境变量 `PATH`（即"可执行程序所在的搜索路径列表"）列出的几个目录，依次找名为 `ls` 的程序，找到第一个就执行。

::: tip 💡 认识错误信息
当找不到对应程序时，终端会提示 `command not found: xxx`。这通常意味着：这个程序没安装，或不在 PATH 里。
:::

## 避坑指南

### 坑 1：选项和参数写反了

```bash
# 错误示范
ls Documents -l a    # 多个无意义参数可能导致报错

# 正确
ls -l Documents
```

### 坑 2：误以为 `-h` 一定是帮助

`ls -h` 在 Linux 上显示"人类可读大小"，在部分命令中才代表"帮助"。不确定时，`--help` 更可靠。

### 坑 3：漏掉选项需要的值

```bash
head -n hello.txt    # -n 缺少数字，可能报错或解析异常
head -n 10 hello.txt # 正确
```

### 坑 4：Windows 与 macOS 混用选项

`ls -a` 在 Windows PowerShell 中可能是无效参数。Windows 命令常用 `-Force`、`-Recurse` 等单词选项；不确定时查 `-?` 帮助。

::: tip 💡 保险的做法
不确定任何命令的用法时：先 `命令 --help`（Windows 用 `命令 -?`），再执行。绝大多数歧义在帮助文本里都能解开。
:::

## 拓展阅读

### 管道与重定向再理解

选项和参数只影响单条命令；而 `|`（管道）与 `>`（重定向）则是命令与命令之间的组合。例如：

```bash
# macOS / Linux
ls -la | grep "hello"    # 先列出，再筛选包含 hello 的行
ls > list.txt            # 把输出写入文件

# Windows PowerShell
Get-ChildItem | Select-String "hello"
Get-ChildItem > list.txt
```

### 下一篇预告

命令里的参数常常是路径，比如 `cd Documents`、`cat hello.txt`。`Documents`、`..`、`~` 到底指向哪里？下一篇将讲解文件系统与路径。

## 术语表

| 术语 | 意思 |
|-----|------|
| **命令名 (Command)** | 要执行的程序名，位于命令行的第一段 |
| **选项 (Option / Flag)** | 以 `-` 或 `--` 开头的修饰词，调整命令行为 |
| **短选项 (Short Option)** | 单字母选项，如 `-l`，可合并为 `-la` |
| **长选项 (Long Option)** | 单词选项，如 `--all`、`--help` |
| **带参数选项** | 自身需要接收一个值的选项，如 `head -n 10` 中的 `-n` |
| **参数 (Argument)** | 命令操作的对象，如文件名、目录名 |
| **--help** | 查看命令用法摘要的通用选项 |
| **-h** | 在不同命令中含义不同，可能是帮助或人类可读大小 |
| **man** | Manual，手册，查看命令的完整说明 |
| **PATH** | 环境变量，Shell 查找可执行程序的目录列表 |
| **--** | 分隔符，之后的词一律按参数解析 |
