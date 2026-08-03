# Under Vibe

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

- 完全零基础的普通人
- 只会用 GUI 工具、几乎不懂命令行的人
- 做过一些 VibeCoding 项目但经常卡住、不知道该了解什么的人

### 内容原则

1. **友好易懂，但专业准确**——可以说得浅，但不能说错
2. **场景驱动，按需学习**——知识在真正需要的时候才出现
3. **三层结构**：🎯 实战层（解决当前问题）→ 🧩 底层（理解为什么）→ ✨ 架构层（学会设计与沟通）

每个章节都围绕一个真实场景（"AI 让你 XXX，你不知道什么意思"），先教你怎么做，再解释背后的原理，末尾附术语表。

## 目录结构

```
under-vibe/
├── PROJECT_SPEC.md                # 项目规范：定位、知识体系、进度
├── STYLE_GUIDE.md                 # 写作风格指南：语气、格式、图示、术语规范
├── AGENTS.md                      # 代理团队（site-architect / content-writer / quality-assurance）协作说明
├── Makefile                       # 常用命令：安装 / 开发 / 构建 / 部署
├── .gitignore
└── vitepress/                     # 文档站点（基于 VitePress）
    ├── package.json
    └── docs/
        ├── index.md               # 站点首页
        ├── public/logo.png        # 站点 Logo
        ├── .vitepress/
        │   ├── config.mts         # 站点配置与侧边栏导航（学习路线的权威来源）
        │   └── theme/             # 主题定制
        │       ├── custom.css     # 全局样式
        │       ├── index.js       # 组件注册
        │       └── components/
        │           └── InteractiveTerminal.vue   # 沙盒终端：在浏览器里安全练命令
        └── tutorial/              # 教程正文
            ├── why-this-project.md    # 前言：为什么要做这个项目
            ├── start-here.md          # 新手引导（建设中）
            ├── technical-choices.md   # 技术选型篇（建设中）
            ├── coming-soon.md         # 占位页
            ├── 01-getting-started/    # 换个角度看电脑：终端 / 命令 / 文件系统 / 隔离 / Git / 环境变量 / 搜索
            ├── 02-cs-fundamentals/    # 基础篇：网络 / 存储 / 操作系统 / 组成原理 / 编译 / 数据结构 / 离散数学
            ├── 03-engineering/        # 工程篇：项目结构 / 配置 / 部署 / 日志 / 测试
            ├── 04-debugging/          # 排错篇：读懂报错 / 常见场景 / 搜索提问
            └── 05-ai/                 # AI 篇：Token / 模型选择 / Prompt / AI 边界
```

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

## 学习路线

建议按这个顺序阅读，每一篇都在上一篇的知识上再走一步：

1. **从"前言"开始** → [为什么要做这个项目](./vitepress/docs/tutorial/why-this-project.md)
2. **换个角度看电脑**：认识终端（含浏览器内沙盒终端，可安全练习）→ 看懂命令 → 文件系统 → 文件夹隔离 → Git → 环境变量
3. **软技能**：AI 帮不了你时的搜索方法、开发视野
4. **基础篇（计算机经典基础）**：计算机网络 → 数据存储 → 操作系统 → 计算机组成原理 → 编译原理 → 数据结构 → 离散数学
5. **工程篇（从写代码到做项目）**：项目结构 → 配置文件 → 部署 → 日志 → 测试
6. **AI 篇（理解你的副驾驶）**：Agent 配置 → Token 与 Context → 模型选择 → Prompt → AI 的边界
7. **排错篇（报错了怎么办）**：读懂错误信息 → 常见报错场景 → 搜索和提问的正确姿势

完整导航见站点侧边栏（`vitepress/docs/.vitepress/config.mts`）。

## 当前进度

- ✅ 项目规范、风格指南、站点框架与首页
- ✅ 前言：为什么要做这个项目
- ✅ 认识终端（含交互式沙盒终端组件）
- 🚧 其余章节正在建设中（占位页标记 WIP）

## 如何贡献

欢迎参与写作与校对。写作前请先阅读 [STYLE_GUIDE.md](./STYLE_GUIDE.md) 了解风格约定（先说人话再说术语、命令同时给出 macOS/Linux 与 Windows 版本、章节末附术语表等），并把新增章节登记到 `vitepress/docs/.vitepress/config.mts` 的侧边栏中。
