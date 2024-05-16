
import process from 'node:process'
import themePlume from 'vuepress-theme-plume'
import type { Theme } from 'vuepress'
import { enNotes, zhNotes } from './notes.js'
import { enNavbar, zhNavbar } from './navbar.js'

export const theme: Theme = themePlume({
  logo: '/favicon.ico',
  hostname: process.env.SITE_HOST || 'https://plume.pengzhanbo.cn',
  repo: 'https://github.com/pengzhanbo/vuepress-theme-plume',
  docsDir: 'docs',

  // avatar: {
  //   url: '/favicon.ico',
  //   name: 'ScopeSentry',
  //   description: 'The Theme for Vuepress 2.0',
  //   location: 'GuangZhou, China',
  //   organization: 'pengzhanbo',
  // },

  social: [
    { icon: 'github', link: 'https://github.com/pengzhanbo/vuepress-theme-plume' }
  ],
  navbarSocialInclude: ['github'],

  footer: { copyright: 'Copyright © 2024-present Autumn' },

  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
    '/en/': {
      notes: enNotes,
      navbar: enNavbar,
    },
  },
  plugins: {
    frontmatter: { exclude: ['**/*.snippet.*'] },

    shiki: { twoslash: true },

    markdownEnhance: {
      demo: true,
      include: true,
      chart: true,
      echarts: true,
      mermaid: true,
      flowchart: true,
    },
    markdownPower: {
      pdf: true,
      caniuse: true,
      plot: true,
      bilibili: true,
      youtube: true,
      icons: true,
      codepen: true,
      replit: true,
      codeSandbox: true,
      jsfiddle: true,
      repl: {
        go: true,
        rust: true,
        kotlin: true,
      },
    },

    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'pengzhanbo/vuepress-theme-plume',
      repoId: 'R_kgDOG_ebNA',
      category: 'docs-comment',
      categoryId: 'DIC_kwDOG_ebNM4Cd0uF',
      mapping: 'url',
      reactionsEnabled: true,
      inputPosition: 'top',
      darkTheme: 'dark_protanopia',
      lightTheme: 'light_protanopia',
    },

    watermark: {
      enabled: false,
      watermarkOptions: {
        content: 'vuepress-theme-plume',
      },
    },

  },
  encrypt: {
    rules: {
      '/article/enx7c9s/': '123456',
    },
  },
})
