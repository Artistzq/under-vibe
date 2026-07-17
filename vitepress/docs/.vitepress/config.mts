import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: 'Under Vibe',
  description: 'vibecoding 背后的计算机知识',
  mermaid: {},
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/tutorial/why-this-project' }
    ],
    sidebar: [
      {
        text: '前言',
        items: [
          { text: '为什么要做这个项目？', link: '/tutorial/why-this-project' },
        ]
      },
      {
        text: '换个角度看电脑',
        items: [
          {
            text: '认识终端',
            collapsed: false,
            items: [
              { text: '终端：那个黑窗口是什么', link: '/tutorial/01-getting-started/01-terminal' },
              { text: '看懂一条命令：选项和参数', link: '/tutorial/01-getting-started/02-command-structure' },
              { text: '文件系统：路径是怎么回事', link: '/tutorial/01-getting-started/03-file-system' },
            ]
          },
          { text: '文件夹隔离：每个项目一个家', link: '/tutorial/01-getting-started/07-isolation' },
          { text: 'Git：版本管理，后悔药和时光机', link: '/tutorial/01-getting-started/08-git' },
          { text: '环境变量：程序的全局设置', link: '/tutorial/01-getting-started/06-environment-variables' },
        ]
      },
      {
        text: '软技能：编程不只是写代码',
        items: [
          { text: '搜索：AI 帮不了你的时候', link: '/tutorial/01-getting-started/09-search' },
          { text: '开发视野：别急着让 AI 造轮子', link: '/tutorial/02-cs-fundamentals/05-research/01-intro' },
        ]
      },
      {
        text: '基础篇：计算机经典基础',
        collapsed: false,
        items: [
          {
            text: '计算机网络',
            collapsed: true,
            items: [
              { text: '概述', link: '/tutorial/02-cs-fundamentals/01-network/01-overview' },
              { text: 'HTTP：浏览器和服务器怎么聊天', link: '/tutorial/02-cs-fundamentals/01-network/02-http' },
              { text: 'DNS：网址怎么变成 IP 地址', link: '/tutorial/02-cs-fundamentals/01-network/03-dns' },
              { text: '客户端 vs 服务端', link: '/tutorial/02-cs-fundamentals/01-network/04-client-server' },
              { text: 'API：程序之间怎么互相调用', link: '/tutorial/02-cs-fundamentals/01-network/05-api' },
              { text: '为什么跨域会报错', link: '/tutorial/02-cs-fundamentals/01-network/06-cors' },
            ]
          },
          {
            text: '数据存储',
            collapsed: true,
            items: [
              { text: '概述', link: '/tutorial/02-cs-fundamentals/02-storage/01-overview' },
              { text: 'JSON：数据交换的通用语言', link: '/tutorial/02-cs-fundamentals/02-storage/02-json' },
              { text: '文件 vs 数据库', link: '/tutorial/02-cs-fundamentals/02-storage/03-file-vs-db' },
              { text: '浏览器存储：localStorage、Cookie', link: '/tutorial/02-cs-fundamentals/02-storage/04-browser-storage' },
              { text: '缓存是什么', link: '/tutorial/02-cs-fundamentals/02-storage/05-cache' },
            ]
          },
          {
            text: '操作系统',
            collapsed: true,
            items: [
              { text: '操作系统在干什么', link: '/tutorial/02-cs-fundamentals/03-os/01-intro' },
            ]
          },
          {
            text: '计算机组成原理',
            collapsed: true,
            items: [
              { text: 'CPU、内存、硬盘是怎么回事', link: '/tutorial/02-cs-fundamentals/04-computer-organization/01-intro' },
            ]
          },
          {
            text: '编译原理',
            collapsed: true,
            items: [
              { text: '代码是怎么变成程序的', link: '/tutorial/02-cs-fundamentals/06-compiler/01-intro' },
            ]
          },
          {
            text: '数据结构与算法',
            collapsed: true,
            items: [
              { text: '数组、对象、哈希表怎么选', link: '/tutorial/02-cs-fundamentals/07-data-structures/01-intro' },
            ]
          },
          {
            text: '离散数学',
            collapsed: true,
            items: [
              { text: '离散数学入门', link: '/tutorial/02-cs-fundamentals/08-discrete-math/01-intro' },
            ]
          },
        ]
      },
      {
        text: '工程篇：从写代码到做项目',
        items: [
          { text: '一个正经项目长什么样', link: '/tutorial/03-engineering/02-project-structure' },
          { text: '配置文件：.json .yaml .env 是干什么的', link: '/tutorial/03-engineering/03-config-files' },
          { text: '部署：把代码从本地搬到网上', link: '/tutorial/03-engineering/04-deployment' },
          { text: '日志：程序在你看不见的地方说什么', link: '/tutorial/03-engineering/05-logging' },
          { text: '测试：怎么知道代码没写错', link: '/tutorial/03-engineering/06-testing' },
        ]
      },
      {
        text: 'AI 篇：理解你的副驾驶',
        items: [
          { text: 'Agent 配置了什么', link: '/tutorial/01-getting-started/02-agent-config' },
          { text: 'Token 和 Context：为什么 AI 会"忘"', link: '/tutorial/05-ai/01-tokens-context' },
          { text: '模型怎么选', link: '/tutorial/05-ai/02-model-selection' },
          { text: 'Prompt 怎么写效果更好', link: '/tutorial/05-ai/03-prompt-basics' },
          { text: 'AI 的边界：什么时候信，什么时候查', link: '/tutorial/05-ai/04-ai-boundaries' },
        ]
      },
      {
        text: '排错篇：报错了怎么办',
        items: [
          { text: '读懂错误信息：stack trace 是什么', link: '/tutorial/04-debugging/01-reading-errors' },
          { text: '常见报错场景及解决思路', link: '/tutorial/04-debugging/02-common-scenarios' },
          { text: '搜索和提问的正确姿势', link: '/tutorial/04-debugging/03-search-skills' },
        ]
      },
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
