import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Under Vibe',
  description: 'vibecoding 背后的计算机知识',
  markdown: {
    mermaid: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/tutorial/start-here' }
    ],
    sidebar: [
      {
        text: '前言',
        items: [
          { text: '为什么要做这个项目？', link: '/tutorial/why-this-project' },
        ]
      },
      {
        text: '第一阶段：开始新项目',
        items: [
          { text: '终端基础', link: '/tutorial/01-start-project/01-terminal-basics' },
          { text: '文件系统', link: '/tutorial/01-start-project/02-file-system' },
          { text: '安装依赖', link: '/tutorial/01-start-project/03-dependencies' }
        ]
      },
      {
        text: '第二阶段',
        items: [
          { text: '项目运行不起来', link: '/tutorial/coming-soon' }
        ]
      },
      {
        text: '更多内容',
        items: [
          { text: '代码有问题', link: '/tutorial/coming-soon' },
          { text: '保存分享代码', link: '/tutorial/coming-soon' },
          { text: '卡壳了怎么办', link: '/tutorial/coming-soon' },
          { text: '✨ 架构篇', link: '/tutorial/coming-soon' }
        ]
      }
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
