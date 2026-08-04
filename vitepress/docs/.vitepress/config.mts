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
        text: '📐 学习路径（预目录）',
        link: '/tutorial/plan'
      },
      {
        text: '前言',
        items: [
          { text: '为什么要做这个项目？', link: '/tutorial/why-this-project' },
        ]
      },
      {
        text: '上手篇：开始一个新项目',
        items: [
          { text: '终端：那个黑窗口是什么', link: '/tutorial/01-getting-started/01-terminal' },
          { text: '环境：装个环境为什么这么难', link: '/tutorial/01-getting-started/04-environment' },
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
