# Git：版本管理，后悔药和时光机

AI 对你说：*"用 git init 初始化，然后 git add . 和 git commit"*

你：*"为什么要把代码存两遍？我直接 Ctrl+S 不就行了吗？"*

如果你手动保存代码，每次都是覆盖上一个版本。改坏了，回不去。
有了 Git，你就有了一个"时光机"——随时可以回到任何一个你保存过的版本。

这一篇，我们用最简单的方式理解 Git，让你能开始用。

## 🎯 实战：从零开始用 Git

### Git 是什么？打个比方

想象你在玩一个 RPG 游戏：

| 操作 | 游戏里 | Git 里 |
|------|--------|--------|
| 保存进度 | 存档 | `git commit` |
| 上传存档到云端 | 云存档 | `git push` |
| 下载别人的存档 | 下载存档 | `git clone` / `git pull` |
| 回到之前的存档 | 读档 | `git checkout` |

Git 就是你代码的"游戏存档系统"。

### 第一步：确认你有 Git

打开终端，输入：

```bash
git --version
```

如果显示了版本号（比如 `git version 2.39.0`），说明你已经有了。

如果没有，去 [git-scm.com](https://git-scm.com/) 下载安装。

### 第二步：初始化一个 Git 仓库

进到你的项目文件夹，然后：

```bash
cd my-project
git init
```

你会看到：

```
Initialized empty Git repository in /Users/you/my-project/.git/
```

这行字的意思是：Git 在你的项目里创建了一个隐藏文件夹 `.git`，用来记录所有的版本历史。

**一个项目只需要初始化一次。**

### 第三步：看看现在是什么状态

```bash
git status
```

你会看到 Git 告诉你：有哪些文件改了，哪些是新文件，哪些还没被 Git 跟踪。

**`git status` 是你最常用的命令。** 任何时候搞不清楚状况了，就 `git status`。

### 第四步：保存一个版本（commit）

Git 保存版本分两步——先"选中"，再"保存"：

```bash
# 第一步：选中所有改过的文件
git add .

# 第二步：保存，写一句备注
git commit -m "第一次提交，项目初始化"
```

拆开看：

- `git add .`：`.` 表示"当前目录下所有文件"。这步是告诉 Git："这些文件我要保存"
- `git commit -m "..."`：`-m` 表示 message（备注）。这步是真正保存，并写一句说明你改了什么

::: tip 💡 为什么要分两步？
因为有时候你不想保存所有文件。比如你改了三个文件，但只想保存其中两个。

`git add` 就是"挑选要保存的文件"，`git commit` 才是"真的保存"。
:::

### 第五步：看历史记录

```bash
git log
```

你会看到所有的 commit 记录，每个都有：
- 一个很长的编号（commit hash）
- 作者和时间
- 你写的备注

这就是你的"存档列表"。

---

## 🔥 日常使用：改代码 → 保存 → 改代码 → 保存

你每次改完代码后，走这三步：

```bash
git add .
git commit -m "改了首页的标题"
```

改一次，commit 一次。备注写清楚你改了什么，一个月后你自己会感谢现在认真写备注的你。

### 备注怎么写？

```bash
# ❌ 不好的备注
git commit -m "改了点东西"
git commit -m "fix"
git commit -m "asdf"

# ✅ 好的备注
git commit -m "修复首页标题显示不全的问题"
git commit -m "添加用户登录功能"
git commit -m "更新依赖版本"
```

---

## ☁️ 把代码存到云端（GitHub）

光存在自己电脑上还不够——万一电脑坏了呢？

### 把本地仓库推到 GitHub

```bash
# 1. 在 GitHub 上创建一个新仓库（不要勾选"添加 README"）
# 2. 复制 GitHub 给你的地址，类似：
#    https://github.com/yourname/my-project.git

# 3. 关联远程仓库
git remote add origin https://github.com/yourname/my-project.git

# 4. 推上去
git push -u origin main
```

`git push` 就是把本地的所有 commit 上传到 GitHub。

**之后每次改完代码，commit 完再 push：**

```bash
git add .
git commit -m "修了一个 bug"
git push
```

### 把别人的项目下载下来

```bash
git clone https://github.com/someone/their-project.git
```

`git clone` 会把整个项目（包括所有历史版本）下载到你的电脑上。

### 拉取别人的更新

如果你和别人一起做一个项目，别人 push 了新代码，你拉下来：

```bash
git pull
```

---

## 🧩 底层揭秘：Git 是怎么做到的？

### 不是"存整个文件"，而是"存变化"

想象你在写日记：

- 普通保存：每天把整本日记重抄一遍（费纸）
- Git 保存：只记录"今天比昨天多了哪几行"（省空间）

Git 存的不是每个版本的完整文件，而是一系列"变化"（叫 **diff**）。

```
版本 1：你好世界
版本 2：你好世界，今天天气真好     ← Git 只存了"多了',今天天气真好'"
版本 3：你好世界，今天下雨了        ← Git 只存了"把'天气真好'改成'下雨了'"
```

这样，Git 可以算出任何一个版本的样子，而且占用的空间很小。

### 三个区域：工作区、暂存区、仓库

Git 在你电脑上维护着三个"区域"：

```mermaid
graph LR
    A[工作区<br><small>你正在改的文件</small>] -->|git add| B[暂存区<br><small>准备保存的文件</small>]
    B -->|git commit| C[本地仓库<br><small>已保存的版本</small>]
    C -->|git push| D[远程仓库<br><small>GitHub 上的版本</small>]
```

| 区域 | 是什么 | 对应命令 |
|------|--------|---------|
| 工作区 | 你正在编辑的文件 | 你写代码的地方 |
| 暂存区 | 你选中要保存的文件 | `git add` |
| 本地仓库 | 已保存的所有版本 | `git commit` |
| 远程仓库 | GitHub 上的备份 | `git push` / `git pull` |

---

## ⚠️ 常见坑

### 坑 1：忘记写 -m

```bash
git commit
# 然后终端进了一个奇怪的界面...
```

Git 会打开默认编辑器（通常是 vim）让你写备注。
如果你不知道怎么退出 vim：按 `Esc`，然后输入 `:q!`，回车。

**记住：commit 的时候加 `-m`，省事。**

### 坑 2：push 被拒绝

```
! [rejected] main -> main (fetch first)
```

意思是：GitHub 上有你本地没有的更新。先 `git pull`，再 `git push`。

### 坑 3：想回到之前的版本

```bash
# 回到上一个 commit（改动还在，但变成"未保存"状态）
git reset --soft HEAD~1

# 彻底回到上一个 commit（改动也没了，慎用！）
git reset --hard HEAD~1
```

**`--hard` 是危险的。** 除非你确定不要那些改动了，否则用 `--soft`。

### 坑 4：node_modules 不该提交

`node_modules` 文件夹太大了，不应该放到 Git 里。

在项目根目录创建一个 `.gitignore` 文件，内容写：

```
node_modules/
.env
```

这样 Git 就会忽略这些文件。

---

## 🤔 然后呢？

现在你的工作流应该是：

```bash
# 每次改完代码
git add .
git commit -m "描述你改了什么"
git push
```

你已经有了后悔药和时光机。接下来，我们看看怎么让项目跑起来——**安装依赖**。

---

## 📝 术语表

| 术语 | 意思 |
|-----|------|
| **Git** | 版本管理工具，记录代码的每一个版本 |
| **仓库 (Repository)** | 一个项目的 Git 版本记录，简称 repo |
| **commit** | 一次保存，相当于游戏里的"存档" |
| **add** | 选中要保存的文件 |
| **push** | 把本地的 commit 上传到 GitHub |
| **pull** | 把 GitHub 上的更新拉到本地 |
| **clone** | 把别人的项目下载到本地 |
| **.gitignore** | 告诉 Git 忽略哪些文件（比如 node_modules） |
| **GitHub** | 存放 Git 仓库的网站，代码的"云盘" |

---

上一篇：[文件夹隔离](./07-isolation)

下一篇：[环境变量：程序的全局设置](./06-environment-variables)