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
        '/zh/javascript/4-闭包.md', 
        '/zh/javascript/5-继承.md', 
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