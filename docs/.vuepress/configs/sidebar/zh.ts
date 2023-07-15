import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/': [
    {
      text: 'Javascript',
      collapsible: true,
      children: [
        '/zh/javascript/1-变量声明.md',
        '/zh/javascript/15-相等性判断.md',
        '/zh/javascript/2-数据类型.md',
        '/zh/javascript/3-this.md',
        '/zh/javascript/4-闭包.md',
        '/zh/javascript/5-继承.md',
        '/zh/javascript/6-new操作符.md',
        '/zh/javascript/7-深浅拷贝.md',
        '/zh/javascript/8-执行上下文.md',
        '/zh/javascript/9-原型和原型链.md',
        '/zh/javascript/10-事件循环.md',
        '/zh/javascript/11-包装类.md',
        '/zh/javascript/12-常用数组方法.md',
        '/zh/javascript/13-常用对象方法.md',
        '/zh/javascript/14-常用字符串方法.md',
      ],
    },
    {
      text: 'JS手写实现',
      collapsible: true,
      children: [
        '/zh/js手写实现/promise.md',
        '/zh/js手写实现/instanceof.md',
        '/zh/js手写实现/call-apply-bind.md',
      ],
    },
    {
      text: '正则表达式',
      collapsible: true,
      children: [
        '/zh/正则表达式/1-正则表达式知识点.md',
        '/zh/正则表达式/2-正则表达式练习题.md',
        '/zh/正则表达式/3-常用的正则表达式.md',
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