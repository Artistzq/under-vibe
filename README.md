# Under Vibe

<div align="center">

![Made with Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)
![Built with VitePress](https://img.shields.io/badge/Built%20with-VitePress-41B883.svg)
![中文文档](https://img.shields.io/badge/文档-简体中文-2ea44f.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)

</div>

> VibeCoding 很爽，但这些底层知识能让你走得更远

一个帮助**零基础人群**理解 VibeCoding 背后必备计算机知识的沉浸式学习指南。

## 这是什么

用 AI 写代码（VibeCoding）的朋友越来越多，但很多人卡在同一个尴尬的位置：

- AI 说"打开终端执行这条命令"，你问"什么是终端？"
- 报错看不懂，只能把错误信息原样丢回给 AI，改了再跑还是报错
- 项目文件一多，不知道哪个是干什么的，不敢动
- AI 给了几个方案，不知道选哪个

Under Vibe 要补的，正是那些**写代码的人觉得你肯定知道、但从来没人告诉过你**的计算机基础知识。

> ✅ 这个项目是什么：它是那些"写代码的人觉得肯定知道，但没人告诉你"的事。
> ❌ 这个项目不是什么：不是编程入门教程（不教写代码）、不是计算机专业课、不是 AI 教程。

读完它不会让你变成程序员，但和 AI 合作的时候，会少很多"卡住了不知道怎么办"的时刻。

### 适合谁

- 完全零基础，但期望学习计算机知识的人
- 只会用 GUI 工具、几乎不懂命令行的人
- 做过一些 VibeCoding 项目但经常卡住、不知道该了解什么的人

### 内容原则

1. **友好易懂，但专业准确**——可以说得浅，但不能说错
2. **场景驱动，按需学习**——知识在真正需要的时候才出现

每个章节都围绕一个真实场景（"AI 让你 XXX，你不知道什么意思"），先教你怎么做，再解释背后的原理，末尾附术语表。

## 目录结构

```
under-vibe/
├── PROJECT_SPEC.md
├── STYLE_GUIDE.md
├── AGENTS.md
├── Makefile
├── .gitignore
└── vitepress/
    ├── package.json
    └── docs/
        ├── index.md
        ├── public/
        ├── .vitepress/
        │   ├── config.mts
        │   └── theme/
        └── tutorial/
            ├── plan.md              # 学习路径与目录规划（预目录）
            ├── why-this-project.md
            ├── 01-getting-started/  # 上手篇
            ├── 02-cs-fundamentals/  # 基础篇（规划中）
            ├── 03-engineering/      # 工程篇（规划中）
            ├── 04-debugging/        # 排错篇（规划中）
            └── 05-ai/               # AI 篇（规划中）
```

> 目录是**动态生成**的：侧边栏只登记已实际完成的文章；规划中但未编写的章节只存在于 `tutorial/plan.md`（预目录）中，不创建占位文件，对应的目录也会在文章完成后才出现。

## 本地运行

需要 [Node.js](https://nodejs.org/)（npm 随附）。

```bash
# 1. 安装依赖
make install
# 等价于：cd vitepress && npm install

# 2. 启动本地开发服务器（默认端口 30066）
make dev
# 打开 http://localhost:30066 即可预览

# 3. 其他常用命令
make build     # 构建生产版本
make preview   # 预览构建产物
make clean     # 清理构建产物与缓存
make deploy    # 部署到服务器（需先设置 ALIYUN_ECS_PUBLIC_IP / ALIYUN_ECS_PASSWORD）
```

也可以直接使用 npm 命令：

```bash
cd vitepress
npm install
npm run dev      # vitepress dev docs
npm run build    # vitepress build docs
npm run preview  # vitepress preview docs
```

## 如何贡献

欢迎参与写作与校对。写作前请先阅读 [STYLE_GUIDE.md](./STYLE_GUIDE.md) 了解风格约定（先说人话再说术语、命令同时给出 macOS/Linux 与 Windows 版本、章节末附术语表等）。**动笔前先看 `vitepress/docs/tutorial/plan.md`（预目录）**，确认文章的路径、标题与定位，写成后把该篇状态改为 ✅，并在 `vitepress/docs/.vitepress/config.mts` 的侧边栏登记链接。
