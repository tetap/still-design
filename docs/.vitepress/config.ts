import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'
import footer from './config/footer'

const base = '/'

export default defineConfig({
  title: 'Still Design',
  description: '一个基于 vue3 开发的前端组件库',
  appearance: false,
  base,
  themeConfig: {
    nav,
    sidebar,
    footer
  }
})
