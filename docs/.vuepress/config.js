import {
  defineUserConfig
} from 'vuepress'

import {
  defaultTheme
} from '@vuepress/theme-default'

import {
  navbarZh,
  sidebarZh,
} from './configs/index.js'

export default defineUserConfig({
  base: '/document/',
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
      'link', {
        rel: 'icon',
        href: '/document/images/logo.png'
      }
    ]
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      // title: '个人网站',
      // description: 'recording',
    },
  },

  theme: defaultTheme({
    // 注意图片放在 public 文件夹下
    logo: '/images/logo.png',

    locales: {
      '/': {
        navbar: navbarZh,
        sidebar: sidebarZh,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    },
    lastUpdated: 'Last Updated', // string | boolean
  }),
})