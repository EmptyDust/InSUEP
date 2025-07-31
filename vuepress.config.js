// vuepress.config.js
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default {
  title: "InSUEP - 上海电力大学信息直通车",
  description:
    "上海电力大学学生共同编写的信息平台，为新老学生提供校园生活的方方面面的信息指南",
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "上海电力大学,SUEP,校园指南,新生指南,上电指南",
      },
    ],
    ["meta", { name: "author", content: "InSUEP Team" }],
  ],
  bundler: viteBundler(),
  theme: hopeTheme({
    // 站点信息
    hostname: "https://insuep.github.io",
    logo: "/logo.png",
    repo: "https://github.com/EmptyDust/InSUEP",
    repoLabel: "GitHub",
    docsDir: "docs",
    docsBranch: "main",

    // 导航栏配置
    navbar: [
      {
        text: "🏠 首页",
        link: "/",
        icon: "home",
      },
      {
        text: "📖 序言",
        link: "/Preface.md",
        icon: "book-open",
      },
      {
        text: "🎓 新生你好",
        link: "/新生你好/",
        icon: "bed",
      },
      {
        text: "📅 上电指南",
        link: "/上电指南/",
        icon: "calendar-day",
      },
      {
        text: "💻 学院与专业介绍",
        link: "/学院与专业介绍/",
        icon: "laptop-code",
      },
      {
        text: "📚 老生入门",
        link: "/老生入门/考研指南/",
        icon: "book",
      },
      {
        text: "📖 开发须知",
        link: "/开发须知/",
        icon: "file-code",
      },
    ],

    // 侧边栏配置 - 为每个导航栏配置独立的侧边栏
    sidebar: {
      // 首页和序言使用默认结构
      "/": "structure",
      "/Preface.md": "structure",

      // 新生指南相关页面
      "/新生你好/": "structure",

      // 校园生活相关页面
      "/上电指南/": "structure",

      // 专业介绍相关页面
      "/学院与专业介绍/": "structure",

      // 考研就业相关页面
      "/老生入门/": "structure",

      // 开发须知相关页面
      "/开发须知/": "structure",
    },

    // 页脚配置
    displayFooter: true,
    footer:
      'CC BY-NC-ND 4.0 Licensed | Copyright © 2025 InSUEP | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备2025118581号-1</a>',
    copyright: "Copyright © 2025 InSUEP",

    // 加密配置
    encrypt: {
      global: false,
    },

    // 插件配置
    plugins: {
      // Markdown 增强插件
      mdEnhance: {
        container: true,
        presentation: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
      },

      // 搜索插件
      search: {
        locales: {
          "/": {
            placeholder: "搜索文档...",
          },
        },
        maxSuggestions: 10,
        hotKeys: ["s", "/"],
      },

      // 博客插件
      blog: {
        excerptLength: 100,
        excerpt: true,
        article: "/article/",
        category: "/category/",
        categoryItem: "/category/:name/",
        tag: "/tag/",
        tagItem: "/tag/:name/",
        timeline: "/timeline/",
        timelineItem: "/timeline/:year/:month/:day/",
      },

      // 评论插件 - 暂时禁用，需要正确配置 Giscus
      // comment: {
      //   provider: "Giscus",
      //   repo: "EmptyDust/InSUEP",
      //   repoId: "R_kgDOLhqQqQ",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDOLhqQqc4CbqQq",
      // },

      // 版权插件
      copyright: {
        author: "InSUEP Team",
        license: "CC BY-NC-ND 4.0",
        triggerWords: 100,
        global: true,
      },

      // 图片预览插件
      photoSwipe: {
        selector: ".theme-hope-content :not(a) > img",
      },
    },

    // Markdown 配置
    markdown: {
      tabs: true,
      gfm: true,
      breaks: true,
      linkify: true,
      imgLazyload: true,
      imgSize: true,
      imgMark: true,
      include: true,
      math: {
        engine: "katex",
        katex: {
          // KaTeX 选项
        },
      },
      codeTabs: true,
      mark: true,
      sup: true,
      sub: true,
      chartjs: true,
      echarts: true,
      flowchart: true,
      mermaid: true,
      demo: true,
      vuePlayground: true,
      attrs: true,
      align: true,
      vPre: true,
    },

    // 热重载
    hotReload: true,

    // 主题色
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },

    // 全屏按钮
    fullscreen: true,

    // 返回顶部按钮
    backToTop: true,

    // 打印按钮
    print: false,

    // 纯净模式
    pure: false,

    // 主题颜色，仅限深浅切换
    darkmode: "toggle",
  }),

  // 站点配置
  locales: {
    "/": {
      lang: "zh-CN",
      title: "InSUEP",
      description: "上海电力大学信息直通车",
    },
  },

  // 插件配置
  plugins: [
    // 其他全局插件可以在这里添加
  ],
};
