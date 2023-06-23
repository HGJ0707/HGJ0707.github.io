import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/': [
    {
      text: 'Javascript',
      collapsible: true,
      children: [
        '/zh/javascript/1-变量声明.md', 
        '/zh/javascript/2-数据类型.md', 
        '/zh/javascript/3-this.md', 
      ],
    },
    // {
    //   text: 'Vue',
    //   collapsible: true,
    //   children: [
    //     '', 
    //     '', 
    //   ],
    // },
  ],
}