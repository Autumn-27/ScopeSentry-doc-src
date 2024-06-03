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
          items: ['介绍', '安装'],
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
          items: ['Introduction', 'Installation'],
        },
        {
          text: 'Tutorial',
          icon: 'lucide:box',
          collapsed: false,
          dir: 'tutorial',
          items: ['System Configuration', 'Dictionary Management', 'POC & Fingerprints & Sensitive Information', 'Create Task', 'Project Management'],
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
