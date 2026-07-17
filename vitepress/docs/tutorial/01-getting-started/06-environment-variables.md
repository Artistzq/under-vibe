# 环境变量：程序的全局设置

AI 对你说：*"把 API Key 放到 .env 文件里，不要直接写在代码里"*

你：*"什么是 .env？为什么要单独放一个文件？API Key 又是什么？"*

你已经知道怎么用终端、怎么装依赖、怎么用 Git 了。
现在还剩最后一个基础概念：**环境变量**。

它听起来很抽象，但其实很简单——就是程序运行时的"全局设置"。

## 🎯 实战：认识环境变量

### 你的电脑已经有一堆环境变量了

打开终端，输入：

```bash
# macOS / Linux
env

# Windows PowerShell
Get-ChildItem Env:
```

你会看到一大堆东西，比如：

```
HOME=/Users/yourname
PATH=/usr/bin:/bin:/usr/sbin
USER=yourname
SHELL=/bin/zsh
```

这些就是环境变量——**你电脑的"全局设置"**。

### 最常用的环境变量：PATH

`PATH` 是最重要的环境变量。它告诉终端："去哪找命令"。

```bash
# 查看你的 PATH
echo $PATH
```

你会看到类似这样的输出：

```
/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
```

这是一串文件夹路径，用 `:` 分隔（Windows 用 `;`）。

当你输入 `ls` 时，终端会去 PATH 里的这些文件夹里找 `ls` 这个程序。找到了就执行。

::: tip 💡 这就是为什么你装完 Node.js 后，终端就认识 `npm` 了
Node.js 安装程序会自动把 Node.js 的文件夹加到 PATH 里。
所以装完就能直接用 `npm` 命令——不需要额外配置。
:::

### 设置一个自己的环境变量

```bash
# macOS / Linux
export MY_NAME="张三"

# 验证一下
echo $MY_NAME
# 输出：张三
```

```bash
# Windows PowerShell
$env:MY_NAME = "张三"

# 验证一下
echo $env:MY_NAME
# 输出：张三
```

但这个设置只在当前终端窗口有效。关掉终端，它就没了。

---

## 🧩 底层揭秘：环境变量到底解决了什么问题？

### 问题：代码里不能写死配置

假设你做的一个网站，需要连接数据库。数据库的地址是：

```
本地开发时：localhost:5432
线上运行时：db.example.com:5432
```

如果你在代码里写死：

```javascript
// ❌ 不要这样
const dbUrl = "localhost:5432"
```

那每次部署到线上，你都得手动改代码。不仅麻烦，而且容易出错。

### 解决：把配置放到"外面"

```javascript
// ✅ 从环境变量读取
const dbUrl = process.env.DATABASE_URL
```

这样，代码不关心数据库在哪——它从环境变量里读，谁运行它，谁就告诉它。

```
本地开发：DATABASE_URL=localhost:5432
线上运行：DATABASE_URL=db.example.com:5432
```

**同一份代码，不同环境，不同配置。**

### .env 文件：环境变量的"记事本"

每次都手动 export 太麻烦了。所以我们把环境变量写在一个文件里：

```bash
# .env 文件
DATABASE_URL=localhost:5432
API_KEY=sk-abc123
NODE_ENV=development
```

大多数框架（Vite、Next.js 等）会自动读取 `.env` 文件，把里面的变量加载到环境变量里。

::: warning ⚠️ 重要：不要把 .env 提交到 Git
`.env` 文件里可能有密码、API Key 等敏感信息。

在 `.gitignore` 里加上：
```
.env
```

这样 Git 就不会把它上传到 GitHub 了。
:::

### 常见的环境变量

| 变量 | 什么意思 | 例子 |
|------|---------|------|
| `NODE_ENV` | 当前运行环境 | `development` / `production` |
| `API_KEY` | API 密钥 | `sk-abc123...` |
| `DATABASE_URL` | 数据库地址 | `postgres://localhost:5432` |
| `PORT` | 服务器端口 | `3000` |
| `BASE_URL` | API 基础地址 | `https://api.example.com` |

---

## 🎮 实战：在你的项目里用环境变量

### 创建一个 .env 文件

在项目根目录新建一个文件，叫 `.env`：

```bash
# .env
VITE_API_URL=https://api.example.com
```

在 Vite 项目中，环境变量必须以 `VITE_` 开头才能被前端代码读取。

### 在代码里读取

```javascript
// 在你的 JS 代码里
console.log(import.meta.env.VITE_API_URL)
// 输出：https://api.example.com
```

### 不同环境，不同 .env

```bash
.env                 # 所有环境共享
.env.development     # 只在开发环境加载
.env.production      # 只在生产环境加载
```

框架会自动根据当前环境选择对应的 `.env` 文件。

---

## ⚠️ 常见坑

### 坑 1：改了 .env 不生效

改完 `.env` 文件后，需要**重启开发服务器**（`Ctrl + C` 停掉，再 `npm run dev`）。

环境变量是在启动时读取的，不会自动更新。

### 坑 2：环境变量名写错了

```bash
# ❌ API_KEY 和 API_KEY 不一样吗？
# 环境变量名区分大小写！
API_KEY=abc
api_key=def    # 这是两个不同的变量！
```

### 坑 3：把 .env 提交到 GitHub 了

如果不小心 push 了 `.env`，删除 `.env` 文件然后重新 commit 是不够的——Git 历史里还留着。

需要：
1. 立即去服务商那里重置 API Key（因为可能已经泄露了）
2. 以后把 `.env` 加到 `.gitignore`

---

## 🤔 然后呢？

现在你已经掌握了跑一个项目所需的所有基本技能：

1. ✅ 打开终端，在里面穿梭
2. ✅ 看懂命令的结构（命令名、选项、参数）
3. ✅ 理解文件路径
4. ✅ 每个项目独立文件夹，互不干扰
5. ✅ 用 Git 保存版本，推到 GitHub
6. ✅ 安装依赖，启动项目
7. ✅ 用环境变量管理配置

从下一篇开始，我们学一个在 AI 时代依然重要的技能——**不靠 AI，自己搜索答案**。

---

## 📝 术语表

| 术语 | 意思 |
|-----|------|
| **环境变量** | 程序运行时的全局设置，存在系统里，代码可以读取 |
| **PATH** | 最重要的环境变量，告诉终端去哪找命令 |
| **.env** | 存放环境变量的文件，项目启动时自动加载 |
| **API Key** | 调用第三方服务的"钥匙"，一串加密的字符串 |
| **NODE_ENV** | 标识当前是开发环境还是生产环境 |
| **export** | 在终端里临时设置环境变量的命令 |

---

上一篇：安装依赖

下一篇：[搜索：自己找到答案的能力](./09-search)