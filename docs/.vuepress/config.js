module.exports = {
  base: '/vuepress-theme-material/',
  dest: 'public',
  title: `Wuyaoxing's Blog`,
  description: '俱怀逸兴壮思飞，欲上青天揽明月',
  port: '9090',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'blog',
      description: '俱怀逸兴壮思飞，欲上青天揽明月！'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: '',
  themeConfig: {
    background: './bg.jpg',
    // material 主题
    material: 'indigo',
    // github username
    username: 'wuyaoxing',
    // 社交网站
    social: [
        {
            name: '知乎',
            icon: 'zhihu',
            url: 'https://www.zhihu.com'
        },
        {
            name: 'github',
            icon: 'github',
            url: 'https://github.com/wuyaoxing'
        },
        {
            name: '微博',
            icon: 'weibo',
            url: 'https://weibo.com'
        }
    ],
    articleDir: 'articles',
    nav: [
      {
        text: '文章',
        link: '/articles/'
      }
    ]
  }
}
