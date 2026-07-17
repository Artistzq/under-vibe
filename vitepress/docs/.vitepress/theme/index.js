import DefaultTheme from 'vitepress/theme'
import InteractiveTerminal from './components/InteractiveTerminal.vue'
import './custom.css'

function handleTabClick(e) {
  const item = e.target.closest('.tabs-nav-item')
  if (!item) return

  const tab = item.dataset.tab
  const container = item.closest('.tabs')
  if (!container) return

  container.querySelectorAll('.tabs-nav-item').forEach(i => i.classList.remove('active'))
  container.querySelectorAll('.tabs-panel').forEach(p => p.classList.remove('active'))

  item.classList.add('active')
  const panel = container.querySelector(`#tab-${tab}`)
  if (panel) panel.classList.add('active')
}

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('InteractiveTerminal', InteractiveTerminal)

    if (typeof window !== 'undefined') {
      document.addEventListener('click', handleTabClick)
    }
  }
}
