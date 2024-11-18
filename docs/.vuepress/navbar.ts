import type { NavItem } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = [
  {
    text: '指南',
    icon: 'icon-park-outline:guide-board',
    link: '/guide/intro/',
    // link: '/notes/guide/介绍.md',
    activeMatch: '^/guide/',
  },
  {
    text: 'Plugin',
    icon: 'ri:puzzle-fill',
    link: 'https://plugin.scope-sentry.top'
  },
  {
    text: 'SecureFlow',
    icon: 'ri:shield-keyhole-fill',
    link: 'https://secureflow.scope-sentry.top/'
  }
] as NavItem[]

export const enNavbar = [
  {
    text: 'Guide',
    icon: 'icon-park-outline:guide-board',
    link: '/en/guide/intro/',
    activeMatch: '^/en/guide/',
  },
  {
    text: 'Plugin',
    icon: 'ri:puzzle-fill',
    link: 'https://plugin.scope-sentry.top'
  },
  {
    text: 'SecureFlow',
    icon: 'ri:shield-keyhole-fill',
    link: 'https://secureflow.scope-sentry.top/'
  }
] as NavItem[]
