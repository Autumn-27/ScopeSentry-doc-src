import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import * as path from 'node:path'
import { theme } from './theme.js'
export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  source: path.resolve(__dirname, '../'),
  public: path.resolve(__dirname, 'public'),
  locales: {
    '/': { lang: 'zh-CN', title: 'ScopeSentry' }, // 简体中文
    '/en/': { lang: 'en-US', title: 'ScopeSentry' }, // English
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon.ico' }],
  ],
  pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
  bundler: viteBundler(),
  theme,
  
})