import {
  defineUserConfig
} from 'vuepress'

import {
  defaultTheme
} from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "HGJ SITE",
  description: 'VuePress 测试唉',
  base: '/docment/',

  theme: defaultTheme({
    // 顶部导航栏
    navbar: [
      // NavbarItem
      {
        text: '导航一',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: '导航二',
        children: ['111', '222'],
      },
    ],

    // 左侧边栏
    sidebar: [
      // SidebarItem
      {
        text: '123',
        link: '/guide/123.md',
        children: [
          // SidebarItem
          {
            text: '111',
            link: '/foo/',
            children: [],
          },
          {
            text: '222',
            link: '/foo/',
            children: [],
          },
        ],
      },
      {
        text: '123',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: '111',
            link: '/foo/',
            children: [],
          },
          {
            text: '222',
            link: '/foo/',
            children: [],
          },
        ],
      },
     
    ],
  }),
})