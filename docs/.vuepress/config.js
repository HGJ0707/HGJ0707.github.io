import {
  defineUserConfig
} from 'vuepress'

import {
  defaultTheme
} from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  // title: "Guangjun's personal website",
  description: 'In the record',
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

  theme: defaultTheme({
    logo: '/images/logo.png',// 注意图片放在 public 文件夹下
    // 顶部导航栏
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      // NavbarGroup
      // {
      //   text: '导航二',
      //   children: ['111', '222'],
      // },
    ],

    // 左侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'JavaScript',
        link: '/guide/JavaScript/变量声明.md',
        children: [
          // SidebarItem
          {
            text: '变量声明',
            link: '/guide/JavaScript/变量声明.md',
            children: [],
          },
          {
            text: '数据类型',
            link: '/guide/JavaScript/数据类型.md',
            children: [],
          },
        ],
      },
      // {
      //   text: '123',
      //   link: '/foo/',
      //   children: [
      //     // SidebarItem
      //     {
      //       text: '111',
      //       link: '/foo/',
      //       children: [],
      //     },
      //     {
      //       text: '222',
      //       link: '/foo/',
      //       children: [],
      //     },
      //   ],
      // },
    ],
  }),
})