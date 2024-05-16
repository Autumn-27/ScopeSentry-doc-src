import type { NavItem } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = [
  {
    text: '指南',
    icon: 'icon-park-outline:guide-board',
    // link: '/guide/intro/',
    link: '/notes/theme/guide/介绍.md',
    activeMatch: '^/guide/',
  }
] as NavItem[]

export const enNavbar = [
  {
    text: 'Guide',
    icon: 'icon-park-outline:guide-board',
    link: '/en/guide/intro/',
    activeMatch: '^/en/guide/',
  }
] as NavItem[]
