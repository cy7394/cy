import { defineConfig } from "vitepress";

export default defineConfig({
  title: "前端技术学习",

  themeConfig: {
    lastUpdatedText: "最后更新时间",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outlineTitle: "本页目录",
    nav: [
      {
        text: "html",
        items: [
          { text: "html介绍", link: "/html/html介绍/1-了解html" },
          {
            text: "多媒体与嵌入",
            link: "/html/多媒体与嵌入/1-多媒体",
          },
          { text: "html表格", link: "/html/html表格/1-表格" },
        ],
      },
      {
        text: "javascript",
        items: [
          {
            text: "javascript笔记",
            link: "/javascript/javascript笔记/1-了解javascript",
          },
          {
            text: "js高级程序设计笔记",
            link: "/javascript/js高级程序设计笔记/1-什么是js",
          },
        ],
      },
      {
        text: "框架与工具",
        items: [
          {
            text: "微信小程序",
            link: "/框架与工具/微信小程序/1-获取手机号",
          },
          {
            text: "git",
            link: "/框架与工具/git/1-配置ssh",
          },
        ],
      },
    ],
    sidebar: {
      "/html": [
        {
          text: "html",
          collapsible: true,
          items: [
            { text: "了解html", link: "/html/html介绍/1-了解html" },
            { text: "head详解", link: "/html/html介绍/2-head详解" },
            { text: "常用的html元素", link: "/html/html介绍/3-常用的html元素" },
            { text: "超链接a元素", link: "/html/html介绍/4-超链接a元素" },
            { text: "高阶文字排版", link: "/html/html介绍/5-高阶文字排版" },
            { text: "文档与网站架构", link: "/html/html介绍/6-文档与网站架构" },
          ],
        },
        {
          text: "多媒体与嵌入",
          collapsible: true,
          items: [
            {
              text: "多媒体",
              link: "/html/多媒体与嵌入/1-多媒体",
            },
            {
              text: "iframe",
              link: "/html/多媒体与嵌入/2-iframe",
            },
            {
              text: "矢量图形",
              link: "/html/多媒体与嵌入/3-矢量图形",
            },
            {
              text: "响应式图片",
              link: "/html/多媒体与嵌入/4-响应式图片",
            },
          ],
        },

        {
          text: "html表格",
          collapsible: true,
          items: [
            {
              text: "表格",
              link: "/html/html表格/1-表格",
            },
          ],
        },
      ],
      "/javascript": [
        {
          text: "javascript笔记",
          collapsible: true,
          items: [
            {
              text: "了解javascript",
              link: "/javascript/javascript笔记/1-了解javascript",
            },
            { text: "变量", link: "/javascript/javascript笔记/2-变量" },
            { text: "操作符", link: "/javascript/javascript笔记/3-操作符" },
            { text: "字符串", link: "/javascript/javascript笔记/4-字符串" },
            {
              text: "字符串方法",
              link: "/javascript/javascript笔记/5-字符串方法",
            },
            { text: "数组", link: "/javascript/javascript笔记/6-数组" },
            {
              text: "数组方法",
              link: "/javascript/javascript笔记/7-数组方法",
            },
          ],
        },
        {
          text: "js高级程序设计笔记",
          collapsible: true,
          items: [
            {
              text: "什么是js",
              link: "/javascript/js高级程序设计笔记/1-什么是js",
            }, {
              text: "html中的js",
              link: "/javascript/js高级程序设计笔记/2-html中的js",
            },
          ],
        },
      ],
      "/框架与工具/": [
        {
          text: "git",
          collapsible: true,
          items: [
            {
              text: "配置ssh",
              link: "/框架与工具/git/1-配置ssh",
            },
            {
              text: "修改远程仓库地址",
              link: "/框架与工具/git/2-修改远程仓库地址",
            },
          ],
        },
        {
          text: "微信小程序",
          collapsible: true,
          items: [
            {
              text: "获取手机号",
              link: "/框架与工具/微信小程序/1-获取手机号",
            },
            {
              text: "双重循环",
              link: "/框架与工具/微信小程序/2-双重循环",
            },
          ],
        },
        {
          text: "vite+vue3+ts",
          collapsible: true,
          items: [
            {
              text: ".prettierrc.js配置",
              link: "/框架与工具/vite+vue3+ts/1-.prettierrc.js配置",
            },
            {
              text: ".eslintrc.cjs配置",
              link: "/框架与工具/vite+vue3+ts/2-.eslintrc.cjs配置",
            },
          ],
        },
      ],
    },
  },
});
