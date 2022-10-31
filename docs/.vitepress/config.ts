import { fileURLToPath } from 'url'
import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'
import footer from './config/footer'
import Container from 'markdown-it-container'

const base = '/'

export default defineConfig({
  title: 'Still Design',
  description: '一个基于 vue3 开发的前端组件库',
  appearance: false,
  base,
  themeConfig: {
    nav,
    sidebar,
    footer,
    socialLinks: [{ icon: 'github', link: 'https://github.com/tetap/still-design' }]
  },
  markdown: {
    theme: 'dracula',
    config: (md) => {
      md.use(Container, 'card', {
        render: (tokens: any, idx: any) => {
          const token = tokens[idx]
          const title = token.info.trim().slice(5).trim()
          const titleHtml = md.render(`## ${title}`)

          return token.nesting === 1 ? `<Demo>${titleHtml}` : '</Demo>\n'
        }
      })
      md.use(Container, 'code', {
        render: (tokens: any, idx: any) => {
          const token = tokens[idx]

          // console.log('token :>> ', token)
          const demoName = token.info.trim().slice(5).trim()

          return token.nesting === 1
            ? `<template #demo><${demoName} /></template><template #code>`
            : '</template>\n'
        }
      })
    }
  },
  vite: {
    resolve: {
      alias: {
        '@still-design/components': fileURLToPath(
          new URL('../../packages/components', import.meta.url)
        )
      }
    }
  }
})
