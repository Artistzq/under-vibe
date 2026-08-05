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

**这个项目不教怎么写代码。** 写代码、解释代码，现在的 AI 都能做得很好——这部分完全可以交给 AI。它不是编程入门教程，也不是计算机专业课或 AI 教程。Under Vibe 补的是 AI 帮不了你的那部分：看懂 AI 正在做什么、判断它给的方案可不可信、在它卡住或走偏时人工接管。VibeCoding 只是计算机体系的一小块，缺了这些底层知识，你很难独立做出一个完整、可靠的工程和产品。

课程采用**双线结构**：主线带你和一个 AI 一起把真实项目从零做到上线，理论线按需解释途中遇到的计算机知识（终端、文件系统、网络、存储、排错、部署等），并在每个阶段配 Build Lab 手动实验、把更深的通识放进支线知识库。读完它不会让你变成程序员，但和 AI 合作的时候，会少很多"卡住了不知道怎么办"的时刻——你不仅看得懂 AI 在做什么，还能在它卡住或走偏时人工接管。

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
            ├── plan.md                       # 学习路径与目录规划（预目录 + 进度维护）
            ├── why-this-project.md           # 前言
            ├── 00-roadmap/                   # 路线地图
            ├── 01-project-startup/           # 第一站 · 项目启动
            ├── 02-project-understanding/     # 第二站 · 看懂项目（规划中）
            ├── 03-web-and-data/              # 第三站 · 网页与数据（规划中）
            ├── 04-debugging-and-takeover/    # 第四站 · 排错与人工接管（规划中）
            ├── 05-build-lab/                 # 实验专题 · Build Lab（规划中）
            ├── 06-deployment-and-maintenance/# 第五站 · 部署与维护（规划中）
            └── side-topics/                  # 支线 · 计算机通识（规划中）
```

> 目录是**动态生成**的：`config.mts` 侧边栏只登记已实际完成的文章；规划中但未编写的章节只存在于 `tutorial/plan.md`（预目录）中，不创建占位文件，对应的目录会在文章完成后才出现。`plan.md` 是给写作者和维护者看的内部规划，本身不进侧边栏。

## 写作前必读（人与 AI 通用）

不管是人还是 AI 代理，动笔写文章、调整目录前请按顺序读这三个文件：

| 顺序 | 文件 | 它决定什么 |
|------|------|-----------|
| 1 | [`vitepress/docs/tutorial/plan.md`](./vitepress/docs/tutorial/plan.md) | **预目录 + 进度**：每篇文章的路径、编号、标题、定位与完成状态 |
| 2 | [`PROJECT_SPEC.md`](./PROJECT_SPEC.md) | 项目定位、目标读者、教学目标、双线课程结构 |
| 3 | [`STYLE_GUIDE.md`](./STYLE_GUIDE.md) | 语气、结构、格式、术语与代码示例规范 |

AI 代理的相同约定另写在 [`AGENTS.md`](./AGENTS.md) 与 `.opencode/agents/*.md` 中，任一入口都会指向 `plan.md`。

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

欢迎参与写作与校对。写作前请先阅读 [STYLE_GUIDE.md](./STYLE_GUIDE.md) 了解风格约定（先说人话再说术语、命令同时给出 macOS/Linux 与 Windows 版本、章节末附术语表等）。**动笔前先看 `vitepress/docs/tutorial/plan.md`（预目录）**，确认文章的路径、标题与定位，写成后把该篇状态改为 ✅，并在 `vitepress/docs/.vitepress/config.mts` 的侧边栏登记链接。项目整体定位与教学理念见 [PROJECT_SPEC.md](./PROJECT_SPEC.md)。
