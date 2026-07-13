import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import InteractiveTerminal from './components/InteractiveTerminal.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('InteractiveTerminal', InteractiveTerminal)

    // Tabs 交互逻辑
    onMounted(() => {
      document.querySelectorAll('.tabs-nav-item').forEach(item => {
        item.addEventListener('click', () => {
          const tab = item.dataset.tab
          const tabsContainer = item.closest('.tabs')
          
          // 移除所有 active 类
          tabsContainer.querySelectorAll('.tabs-nav-item').forEach(i => i.classList.remove('active'))
          tabsContainer.querySelectorAll('.tabs-panel').forEach(p => p.classList.remove('active'))
          
          // 给当前 tab 添加 active 类
          item.classList.add('active')
          tabsContainer.querySelector(`#tab-${tab}`).classList.add('active')
        })
      })
    })
  }
}
