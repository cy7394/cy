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
            link: "/html/多媒体与嵌入/1-了解多媒体与嵌入",
          },
          { text: "html表格", link: "/html/html表格/1-了解表格" },
        ],
      },
      {
        text: "javascript",
        items: [
          {
            text: "javascript第一步",
            link: "/javascript/javascript第一步/1-了解javascript",
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
            { text: "img元素", link: "/html/html介绍/4-img元素" },
            { text: "超链接a元素", link: "/html/html介绍/5-超链接a元素" },
            { text: "高阶文字排版", link: "/html/html介绍/6-高阶文字排版" },
            { text: "文档与网站架构", link: "/html/html介绍/7-文档与网站架构" },
          ],
        },
        {
          text: "多媒体与嵌入",
          collapsible: true,
          items: [
            {
              text: "了解多媒体与嵌入",
              link: "/html/多媒体与嵌入/1-了解多媒体与嵌入",
            },
            {
              text: "html中的图片",
              link: "/html/多媒体与嵌入/2-html中的图片",
            },
            {
              text: "视频和音频内容",
              link: "/html/多媒体与嵌入/3-视频和音频内容",
            },
          ],
        },

        {
          text: "html表格",
          collapsible: true,
          items: [
            {
              text: "了解表格",
              link: "/html/html表格/1-了解表格",
            },
          ],
        },
      ],
      "/javascript/": [
        {
          text: "javascript",
          collapsible: true,
          items: [
            {
              text: "了解javascript",
              link: "/javascript/javascript第一步/1-了解javascript",
            },
            { text: "变量", link: "/javascript/javascript第一步/2-变量" },
            { text: "操作符", link: "/javascript/javascript第一步/3-操作符" },
            { text: "字符串", link: "/javascript/javascript第一步/4-字符串" },
            {
              text: "字符串方法",
              link: "/javascript/javascript第一步/5-字符串方法",
            },
            { text: "数组", link: "/javascript/javascript第一步/6-数组" },
            {
              text: "数组方法",
              link: "/javascript/javascript第一步/7-数组方法",
            },
          ],
        },
      ],
    },
  },
});
