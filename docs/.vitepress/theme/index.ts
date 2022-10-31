import { App, Component } from 'vue'
import Demo from '../../components/Demo.vue'
import Theme from 'vitepress/theme'
import { extractFileNameFromPath } from '../../utils'
// import '@still-design/components/dist/index.css'

export default {
  ...Theme,
  enhanceApp({ app }: { app: App }) {
    const demos: any = import.meta.glob('../../demos/**/*.vue', { eager: true })
    for (const path in demos) {
      app.component(extractFileNameFromPath(path), demos[path].default)
    }
    app.component('Demo', Demo)
  }
}
