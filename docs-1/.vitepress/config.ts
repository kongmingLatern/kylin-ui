import { defineConfig } from 'vitepress'
// sidebar: [
//   {
//     text: 'Examples',
//     items: [
//       { text: 'Markdown Examples', link: '/markdown-examples' },
//       { text: 'Runtime API Examples', link: '/api-examples' }
//     ]
//   }
// ],
const nav = [
  { text: 'Home', link: '/' },
  { text: 'Examples', link: '/markdown-examples' },
]
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button/',
        },
      ],
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ],
}

export default defineConfig({
  title: 'Kylin UI',
  description: 'A React Component',
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vuejs/vitepress',
      },
    ],
  },
})
