module.exports = {
  base: "/projects/vuepress/",
  port: "9090",
  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器"
    }
  },
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }]
  ],
  themeConfig: {
    repo: "wuyaoxing/vuepress-docs",
    repoLabel: "GitHub",
    editLinks: true,
    docsDir: 'docs',
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        nav: [
          { text: "directory", link: "/directory/" },
          { text: "Guide", link: "/guide/" },
          { text: "External", link: "https://google.com" }
        ],
        sidebar: {
          "/directory/": [
            {
              title: "Directory",
              collapsable: false,
              children: [""]
            }
          ],
          "/guide/": genSidebarConfig("Guide")
        }
      },
      "/zh/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        nav: [
          { text: "目录", link: "/zh/directory/" },
          { text: "指南", link: "/zh/guide/" },
          { text: "External", link: "https://google.com" }
        ],
        sidebar: {
          "/zh/directory/": [
            {
              title: "目录",
              collapsable: false,
              children: [""]
            }
          ],
          "/zh/guide/": genSidebarConfig("指南")
        }
      }
    }
  }
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ["", "getting-started"]
    }
  ];
}
