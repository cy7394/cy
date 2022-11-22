# HTML——超文本标记语言

**`Hypertext Markup Language` 简称`HTML`**
**结构化`web`网页及其内容的标记语言**

- 不是一门编程语言 是一种用于定义内容结构的标记语言
- 或者说是一种用来告知浏览器如何组织页面的标记语言

- 可以是一组段落、一个重点信息列表、也可以包含图片和数据表

- 由一系列`elements`元素组成，元素用来包围不同部分的内容

::: tip
html 标签不区分大小写
从一致性和可读性来说，最好仅使用小写
:::

## 元素

```html
<p>my cat is grumpy</p>
```

- 两端分别是开始标签`opening tag`和结束标签`closing tag`
- 中间是内容`content`
- 整体是元素`element`

## 嵌套元素

```html
<p>my cat is <strong>very</strong>grumpy</p>
```

也可以将一个元素置于其他元素之中

## 块级元素和内联元素

- 块级元素在页面中以块的形式展现，其后的内容会被挤到下一行展现
- 内联元素通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或一组内容
  不会导致文本换行，例如`<a>`或者强调元素：`<em>`、`<strong>`

有关知识的详细链接

- [元素内容分类](https://html.spec.whatwg.org/multipage/indices.html#element-content-categories)
- [块级元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)
- [内联元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)

## 空元素

```html
<img src="xxx" alt="image" />
```

不包含任何内容的元素

## 属性

元素拥有属性`attribute`

```html
<p class="editor-note"></p>
```

class 是属性名称，为元素提供一个标识名称，此后可以被用来识别此元素的样式信息和其他信息

editor-note 是属性的值

## 布尔属性

属性`disabled` 表示禁用

```html
<input type="text" disabled />
```

## html 文档

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <!-- <img src="images/firefox-icon.png" alt="My test image" /> -->
  </body>
</html>
```

- `<!DOCTYPE html>`
  声明文档类型 保证文档正常读取

- `<html></html>`
  根元素 包含整个页面的内容

- `<head></head>`
  该元素内容对用户不可见
  包含例如面向搜索引擎的搜索关键字、页面描述、css 样式表、字符编码声明等
- `<meta charset="utf-8" />`
  指定文档使用 utf-8 字符编码
  此编码包括绝大多数人类已知语言的字符，基本上可以处理任何文本内容

- `<title></title>`
  设置页面标题 显示在浏览器标签页上，也作为收藏网页的描述文字

- `<body></body>`
  包含期望让用户在访问页面时候看到的内容，包括文本、图像、视频、游戏、可播放的音轨或其它内容

## 实体引用

在 html 中包括特殊字符
`<`、`>`、`"`、`'`、`&`
必须使用字符引用，表示字符的特殊编码

**以`&`开始 以`;`结束**

| 原义字符 | 等价字符引用 |
| -------- | ------------ |
| <        | `&lt;`       |
| <        | `&lt;`       |
| \>       | `&gt;`       |
| "        | `&quot;`     |
| '        | `&apos;`     |
| &        | `&amp;`      |

## html 注释

注释是被浏览器忽略的，对用户不可见的
快捷键：

- `Ctrl+/`
- `Shift+Alt+A`

```html
<!-- 此处是注释 -->
```

## 单引号或者双引号？

建议始终添加引号，可以避免很多问题，并且使代码更易读
已使用一种引号，可以在引号中嵌套另外一种

## html 中的空白

无论你在 html 元素的内容中使用多少空格（包括空白字符，包括换行），当渲染这些代码的时候，html 解释器会将连续出现的空白字符减少为一个单独的空格符

## 为啥要使用空白

为了可读性
每个嵌套的元素以两个空格缩进，具体风格格式化你的代码取决于你自己
