# 安装依赖

AI 对你说：*"npm install 一下，然后 npm run dev 启动"*

你：*"install 什么？什么是 npm？为什么要做这一步？"*

这是每一个前端项目都必须理解的概念。
搞懂了，你就知道那堆 `node_modules` 文件到底是干嘛的。

## 🎯 实战：运行一个项目

### 第一步：确认你有 npm

打开终端，输入：

```bash
npm -v
```

如果显示了版本号（比如 `10.2.3`），说明你已经有了。

如果显示"命令不存在"，去 [nodejs.org](https://nodejs.org/) 下载安装 Node.js。
npm 会跟着一起装上。

### 第二步：cd 到项目目录

找到 AI 给你的项目文件夹，用 `cd` 命令进去：

```bash
cd /path/to/your/project
```

**重要：一定要进到项目根目录！**

怎么确认？输入 `ls`（或 `dir`），你应该能看到一个叫 `package.json` 的文件。

```bash
ls
# 你应该能看到 package.json
```

看不到这个文件？说明你进错文件夹了。

### 第三步：安装依赖

```bash
npm install
```

你会看到终端刷刷刷地输出一堆东西，可能还会有进度条。

等它跑完，你会发现项目里多了一个 `node_modules` 文件夹。

### 第四步：启动项目

AI 通常会告诉你怎么启动，一般是：

```bash
npm run dev
```

然后你会看到类似这样的输出：

```
  VITE v5.0.0  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

在浏览器打开那个地址，你就看到项目了！

## 🧩 底层揭秘：这几步到底在干什么？

### 什么是依赖？

假设你要做饭：

- 你需要买米、买菜、买调料
- 这些东西不是你自己生产的，但你做饭需要它们

代码也是一样：

- 你的项目需要用到别人写好的代码库
- 这些别人写的代码库，就叫"依赖"（Dependencies）

```
你的项目
├── 你自己写的代码（比如 src 文件夹）
└── 依赖的别人的代码（存在 node_modules 里）
```

### package.json 是什么？

这是你的项目的"购物清单"。

```json
{
  "name": "my-project",
  "dependencies": {
    "react": "^18.0.0",
    "vue": "^3.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

它列出了：
- 你的项目叫什么
- 依赖哪些代码库
- 每个依赖的版本号

就像你去超市前写的购物清单："要买：大米（5kg）、鸡蛋（10个）、牛奶（2L）"

### npm install 做了什么？

`npm install` 就像你拿着购物清单去超市，把清单上的东西都买回来。

- 📄 它读取 `package.json` 里的购物清单
- 🌐 它去 npm 官网（全世界最大的代码超市）找这些包
- 📦 它把这些包下载下来
- 📂 它把下载的代码都放到 `node_modules` 文件夹里

### npm run dev 做了什么？

`npm run dev` 是"启动开发模式"的意思。

它做的事情大概是：
1. 读取你写的代码
2. 把你写的代码和依赖的代码拼在一起
3. 启动一个本地的服务器
4. 监视你的文件变化，改了代码自动刷新

## ⚠️ 常见坑

### 坑 1：忘记 npm install

直接 `npm run dev`，然后报错"找不到某某模块"。

**记住：拿到一个新项目，第一步永远是 `npm install`！**

### 坑 2：在错误的目录下运行

你在 `Documents` 文件夹下运行 `npm install`，
但你的项目其实在 `Documents/my-project` 里。

**记住：运行 npm 命令之前，先 `ls` 确认你能看到 `package.json`！**

### 坑 3：node_modules 太大了

是的，`node_modules` 经常有几百兆甚至几个 G。
这是正常的，现代前端项目的依赖就是这么多。

**不用管它，不要手动去改里面的文件。**

### 坑 4：安装失败怎么办？

如果 `npm install` 报错，试试：

1. 删除 `node_modules` 文件夹和 `package-lock.json` 文件
2. 重新运行 `npm install`

90% 的情况这样就能解决。

## 📝 术语表

| 术语 | 意思 |
|-----|------|
| **npm** | Node Package Manager，Node.js 的包管理器。下载别人代码的工具。 |
| **依赖 (Dependency)** | 你的项目需要用到的别人写的代码库 |
| **package.json** | 项目的配置文件，记录了项目依赖什么包 |
| **node_modules** | 存放所有下载下来的依赖代码的文件夹 |
| **npm install** | 读取 package.json，下载所有依赖 |
| **npm run dev** | 启动开发服务器，让你能在浏览器看到项目 |
| **localhost** | 你的电脑自己，本地开发服务器的地址 |

---

上一篇：[文件系统](./02-file-system)

下一篇：[敬请期待](../coming-soon)