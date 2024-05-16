import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  locales: {
    '/': { lang: 'zh-CN', title: '博客' }, // 简体中文
    '/en/': { lang: 'en-US', title: 'Blog' }, // English
  },
  bundler: viteBundler(),
  theme: plumeTheme({
    locales: {
      '/': {
        navbar: [
          { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
        ]
      },
      '/en/': {
        navbar: [
          { text: 'Home', link: '/en/', icon: 'material-symbols:home-outline' },
        ]
      }
    }
  })
})