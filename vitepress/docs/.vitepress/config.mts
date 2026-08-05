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
        text: '路线地图',
        items: [
          { text: '用 AI 一起做项目：先看整段旅程', link: '/tutorial/00-roadmap/01-build-a-project-with-ai' },
        ]
      },
      {
        text: '第一站 · 项目启动',
        items: [
          { text: '终端：那个黑窗口是什么', link: '/tutorial/01-project-startup/01-terminal' },
          { text: '看懂一条命令：选项和参数', link: '/tutorial/01-project-startup/02-command-structure' },
          { text: '文件系统：路径是怎么回事', link: '/tutorial/01-project-startup/03-path-and-file-system' },
          { text: '环境：装个环境为什么这么难', link: '/tutorial/01-project-startup/04-environment' },
          { text: '依赖：npm install 到底装了什么', link: '/tutorial/01-project-startup/06-dependencies' },
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
