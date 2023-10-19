**问题描述：**

查看日志 ，后端返回的 html 是用 pre 包起来的，导致文字溢出，所以需要用 css 是文字换行。

**解决方案：**

```html
<p class="content" v-html="content" />
```

```scss
::v-deep p > pre {
  word-break: break-all;
  white-space: pre-wrap;
  font-size: 1.2em;
}
```
