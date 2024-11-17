import { definePlumeNotesConfig } from 'vuepress-theme-plume'

export const zhNotes = definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'guide',
      link: '/guide/',
      sidebar: [
        {
          text: '快速开始',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['介绍', '更新记录'],
        },
        {
          text: '安装/更新',
          collapsed: false,
          icon: 'ic:sharp-install-desktop',
          dir: '安装',
          items: ['分布式', '单机部署', '更新'],
        },
        {
          text: '插件指南',
          collapsed: false,
          icon: 'clarity:plugin-line',
          dir: '插件指南',
          items: ['编写教程'],
        },
        {
          text: '使用教程',
          icon: 'lucide:box',
          collapsed: false,
          dir: '使用教程',
          items: ['系统配置', '字典管理', 'POC&指纹&敏感信息', '创建任务', '项目管理'],
        },
        {
          text: '资产信息',
          icon: 'carbon:view',
          collapsed: false,
          dir: '资产信息',
          items: ['资产测绘', '子域名', '子域名接管', 'URL', '爬虫', '敏感信息', '目录扫描', '漏洞', '页面监控'],
        }
      ],
    },
  ],
})

export const enNotes = definePlumeNotesConfig({
  dir: 'en/notes',
  link: '/en',
  notes: [
    {
      dir: 'guide',
      link: '/guide/',
      sidebar: [
        {
          text: 'Quick Start',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['Introduction'],
        },
        {
          text: 'Install/Update',
          collapsed: false,
          icon: 'ic:sharp-install-desktop',
          dir: 'Install',
          items: ['Distributed', 'single', 'update'],
        },
        {
          text: 'Plugin Guide',
          collapsed: false,
          icon: 'clarity:plugin-line',
          dir: 'PluginGuide',
          items: ['Tutorials'],
        },
        {
          text: 'Tutorial',
          icon: 'lucide:box',
          collapsed: false,
          dir: 'tutorial',
          items: ['System Configuration', 'Dictionary Management', 'POC&Fingerprints&Sensitive Information', 'Create Task', 'Project Management'],
        },
        {
          text: 'Asset Information',
          icon: 'carbon:view',
          collapsed: false,
          dir: 'asset-information',
          items: ['Asset Mapping', 'Subdomains', 'Subdomain Takeover', 'URL', 'Crawler', 'Sensitive Information', 'Directory Scanning', 'Vulnerabilities', 'Page Monitoring'],
        }
      ],
    },
  ],
})
