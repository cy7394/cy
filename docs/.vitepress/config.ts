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
          { text: "html标签", link: "/html/html标签/1-了解html" },
          {
            text: "音频和iframe",
            link: "/html/音频和iframe/1-图片和音频",
          },
        ],
      },
      {
        text: "javascript",
        items: [
          {
            text: "了解javascript",
            link: "/javascript/1-了解javascript",
          },
          { text: "变量", link: "/javascript/2-变量" },
          { text: "操作符", link: "/javascript/3-操作符" },
          { text: "字符串", link: "/javascript/4-字符串" },
          {
            text: "字符串方法",
            link: "/javascript/5-字符串方法",
          },
          { text: "数组", link: "/javascript/6-数组" },
          {
            text: "数组方法",
            link: "/javascript/7-数组方法",
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
      {
        text: "问题记录",
        // link: "/问题记录/1-后端get请求返回的zip格式的文件",
        items: [
          {
            text: "后端get请求返回的zip格式的文件",
            link: "/问题记录/1-后端get请求返回的zip格式的文件",
          },
          {
            text: "pre文字溢出样式",
            link: "/问题记录/2-pre文字溢出样式",
          },
          {
            text: "grid布局",
            link: "/问题记录/3-grid布局",
          },
          {
            text: "a标签新窗口打开",
            link: "/问题记录/4-a标签新窗口打开",
          },
          {
            text: "svg颜色、字体大小改不动的问题",
            link: "/问题记录/5-svg颜色、字体大小改不动的问题",
          },
          {
            text: "git commit --amend之后怎么编辑",
            link: "/问题记录/6-git commit --amend之后怎么编辑",
          },
          {
            text: "查看电脑桌面壁纸",
            link: "/问题记录/7-查看电脑桌面壁纸",
          },
          {
            text: "keydown和keyup的区别",
            link: "/问题记录/8.keydown和keyup的区别",
          },
          {
            text: "数组对象根据指定键值排序",
            link: "/问题记录/9-数组对象根据指定键值排序",
          },
          {
            text: "git分支重命名以及删除命令",
            link: "/问题记录/10-git分支重命名以及删除命令",
          },
          {
            text: "unbuntu 前端nginx部署",
            link: "/问题记录/11-unbuntu前端nginx部署",
          },
          {
            text: "scp上传不到服务器的问题",
            link: "/问题记录/12-scp上传不到服务器的问题",
          },
          {
            text: "前端播放声音",
            link: "/问题记录/13-前端播放声音",
          },
          {
            text: "记录前端跨域问题",
            link: "/问题记录/14-记录前端跨域问题",
          },
          {
            text: "信息对话框默认显示到最新消息",
            link: "/问题记录/15-信息对话框默认显示到最新消息",
          },
          {
            text: "聊天对话（webSocket）",
            link: "/问题记录/16-聊天对话（webSocket）",
          },
          {
            text: "前端用到麦克风http行不通",
            link: "/问题记录/17-前端用到麦克风http行不通",
          },
          {
            text: "摄像头视频实时显示",
            link: "/问题记录/18-摄像头视频实时显示",
          },
          {
            text: "切换git的origin数据源",
            link: "/问题记录/19.切换git的origin数据源",
          },
          {
            text: "vue3+vite判断生产环境和线上环境",
            link: "/问题记录/20.vue3+vite判断生产环境和线上环境",
          },
          {
            text: "服务器ip变化，前端如何写动态ip",
            link: "/问题记录/21-服务器ip变化，前端如何写动态ip",
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
            { text: "了解html", link: "/html/html标签/1-了解html" },
            { text: "head详解", link: "/html/html标签/2-head详解" },
            { text: "常用的html元素", link: "/html/html标签/3-常用的html元素" },
            { text: "超链接a元素", link: "/html/html标签/4-超链接a元素" },
            {
              text: "高阶文字排版",
              link: "/html/html标签/5-高阶文字排版",
            },
            { text: "表格", link: "/html/html标签/6-表格" },
            { text: "文档与网站架构", link: "/html/html标签/7-文档与网站架构" },
          ],
        },
        {
          text: "音频和iframe",
          collapsible: true,
          items: [
            {
              text: "图片和音频",
              link: "/html/音频和iframe/1-图片和音频",
            },
            {
              text: "iframe",
              link: "/html/音频和iframe/2-iframe",
            },
            {
              text: "矢量图形",
              link: "/html/音频和iframe/3-矢量图形",
            },
            {
              text: "响应式图片",
              link: "/html/音频和iframe/4-响应式图片",
            },
          ],
        },
      ],
      "/javascript": [
        {
          text: "",
          collapsible: true,
          items: [
            {
              text: "了解javascript",
              link: "/javascript/1-了解javascript",
            },
            { text: "变量", link: "/javascript/2-变量" },
            { text: "操作符", link: "/javascript/3-操作符" },
            { text: "字符串", link: "/javascript/4-字符串" },
            {
              text: "字符串方法",
              link: "/javascript/5-字符串方法",
            },
            { text: "数组", link: "/javascript/6-数组" },
            {
              text: "数组方法",
              link: "/javascript/7-数组方法",
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
      "/问题记录/": [
        {
          text: "",
          items: [
            {
              text: "后端get请求返回的zip格式的文件",
              link: "/问题记录/1-后端get请求返回的zip格式的文件",
            },
            {
              text: "pre文字溢出样式",
              link: "/问题记录/2-pre文字溢出样式",
            },
            {
              text: "grid布局",
              link: "/问题记录/3-grid布局",
            },
            {
              text: "a标签新窗口打开",
              link: "/问题记录/4-a标签新窗口打开",
            },
            {
              text: "svg颜色、字体大小改不动的问题",
              link: "/问题记录/5-svg颜色、字体大小改不动的问题",
            },
            {
              text: "git commit --amend之后怎么编辑",
              link: "/问题记录/6-git commit --amend之后怎么编辑",
            },
            {
              text: "查看电脑桌面壁纸",
              link: "/问题记录/7-查看电脑桌面壁纸",
            },
            {
              text: "keydown和keyup的区别",
              link: "/问题记录/8.keydown和keyup的区别",
            },
            {
              text: "数组对象根据指定键值排序",
              link: "/问题记录/9-数组对象根据指定键值排序",
            },
            {
              text: "git分支重命名以及删除命令",
              link: "/问题记录/10-git分支重命名以及删除命令",
            },
            {
              text: "unbuntu 前端nginx部署",
              link: "/问题记录/11-unbuntu前端nginx部署",
            },
            {
              text: "scp上传不到服务器的问题",
              link: "/问题记录/12-scp上传不到服务器的问题",
            },
            {
              text: "前端播放声音",
              link: "/问题记录/13-前端播放声音",
            },
            {
              text: "记录前端跨域问题",
              link: "/问题记录/14-记录前端跨域问题",
            },
            {
              text: "信息对话框默认显示到最新消息",
              link: "/问题记录/15-信息对话框默认显示到最新消息",
            },
            {
              text: "聊天对话（webSocket）",
              link: "/问题记录/16-聊天对话（webSocket）",
            },
            {
              text: "前端用到麦克风http行不通",
              link: "/问题记录/17-前端用到麦克风http行不通",
            },
            {
              text: "摄像头视频实时显示",
              link: "/问题记录/18-摄像头视频实时显示",
            },
            {
              text: "切换git的origin数据源",
              link: "/问题记录/19.切换git的origin数据源",
            },
            {
              text: "vue3+vite判断生产环境和线上环境",
              link: "/问题记录/20.vue3+vite判断生产环境和线上环境",
            },
            {
              text: "服务器ip变化，前端如何写动态ip",
              link: "/问题记录/21-服务器ip变化，前端如何写动态ip",
            },
          ],
        },
      ],
    },
  },
});
