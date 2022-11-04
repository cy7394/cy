import { defineConfig } from "vitepress";

export default defineConfig({
  title: "前端技术学习",

  themeConfig: {
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outlineTitle: "本页目录",
    nav: [
      {
        text: "html",
        link: "/html/1-了解HTML",
      },
      {
        text: "javascript",
        link: "/javascript/1-了解javascript",
      },
    ],
    sidebar: {
      "/html/": [
        {
          text: "HTML",
          items: [
            { text: "了解HTML", link: "/html/1-了解HTML" },
            { text: "head详解", link: "/html/2-head详解" },
            { text: "常用的html元素", link: "/html/3-常用的html元素" },
            { text: "img元素", link: "/html/4-img元素" },
            { text: "超链接a元素", link: "/html/5-超链接a元素" },
            { text: "高阶文字排版", link: "/html/6-高阶文字排版" },
          ],
        },
      ],
      "/javascript/": [
        {
          text: "javascript",
          items: [
            { text: "了解javascript", link: "/javascript/1-了解javascript" },
            { text: "变量", link: "/javascript/2-变量" },
            { text: "操作符", link: "/javascript/3-操作符" },
            { text: "字符串", link: "/javascript/4-字符串" },
            { text: "字符串方法", link: "/javascript/5-字符串方法" },
            { text: "数组", link: "/javascript/6-数组" },
            { text: "数组方法", link: "/javascript/7-数组方法" },
          ],
        },
      ],
    },
  },
});
