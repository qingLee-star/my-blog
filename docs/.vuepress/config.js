module.exports = {
  title: 'coder-qing的博客',
  description: '菜鸡尝试建博客',
  base: '/my-blog/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '土豆的 博客', 
        items: [
          { text: 'Github', link: 'https://github.com/qingLee-star' },
          { text: '掘金', link: 'https://juejin.cn/user/553809592191015/posts' }
        ]
      },
    ],
    sidebar: [
      {
        title: '欢迎阅读',
        path: '/',
        collapsable: false, // 不折叠
        children: [
            { title: "个人简介", path: "/" }
        ]
      },
      {
        title: "笔试面试",
        path: '/interview/written',
        collapsable: false, // 不折叠
        children: [
          { title: "笔试题集合", path: "/interview/written" },
          { title: "面试题集合", path: "/interview/notes" }
        ],
      }
    ]
  }
}