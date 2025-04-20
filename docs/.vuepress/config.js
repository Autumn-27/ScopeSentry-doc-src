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
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?1009dd550938c5f87c3776c6bd8ee739";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-F4GTN6QXBC'
      }
    ],
    // [
    //   'script',
    //   {},
    //   `
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //     gtag('config', 'G-F4GTN6QXBC');
    //   `
    // ],
    // [
    //   'script',
    //   {
    //     async: true,
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9132891531531113',
    //     crossorigin: 'anonymous'
    //   }
    // ]
  ],
  pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
  bundler: viteBundler({
    viteOptions: {
      // 必须保留的配置
      assetsInclude: ["**/*.html", "**/*?html-proxy*"],
    },
  }),
  theme,
})