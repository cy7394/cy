# head 详解

## head 标签里有什么

在页面加载完成时，`head`标签里面的内容，是**不会**在页面中显示出来的，它包含了诸如页面的`title`、`css`链接、指向自定义图标的链接和其他元数据（描述`html`的数据，比如作者和描述文档的重要关键词）等信息

::: tip
head 元素和 body 元素不同，它的内容不会在浏览器中显示
作用是保存页面的一些元数据 metaData
:::

## metaData

- 元数据，描述数据的数据
- 一个`html`文件是一种数据，但`html`文件也能在`head`元素中包含描述该文档的元数据，比如该文件的作者和概要

::: tip
`meta`元素表示那些不能由其他`html`元相关元素(`<base>`、`<link>`、`<script>`、`<style>`、`<title>`)之一表示的任何元数据信息
:::

## title

为文档添加标题

- `title`内容被作为建议的书签名
- `title`是一项元数据 用于表示整个 html 文档的标题，而不是文档内容

::: tip
和`h1`不同

- `h1`是为`body`添加标题，有时候也叫网页标题
- `h1` 在页面加载完毕时显示在页面中，通常只出现一次，用来标记页面内容的标题
  :::

## meta

为文档添加元数据
`title`也是元数据
有很多不同种类的`meta`元素可以被包含进你的页面的`head`元素

- 指定你的文档中字符的编码

```html
<meta charset="UTF-8" />
```

这个元素简单的指定了文档的字符编码
在这个文档中被允许使用的字符集

- 添加作者和描述，许多 meta 元素包含了 name 和 content 属性
- name 指定了 meta 元素的类型，说明该元素包含了什么类型的信息
- content 指定了实际的元数据内容

```html
<meta name="author" content="cy" />
<meta name="description" content="this is a study demo" />
```

meta 元素定义的元数据的类型包括以下几种：

- 如果设置了 name 属性，meta 元素提供的是文档级别的元数据，应用于整个页面
- 如果设置了 http-equiv 属性，meta 元素则是编译指令，提供的信息与类似命名的 http 头部相同
- 如果设置了 charset 属性，meta 元素是一个字符集声明，告诉文档使用哪种字符编码
- 如果设置了 itemprop 属性，meta 元素提供用户定义的元数据

::: tip
http-equivalent
equivalent [ɪˈkwɪvələnt]
adj. 等同的，等效的
n. 对等的人（或事物），对应的人（或事物）
:::

## 站点增加自定义图标

favicon
16\*16 像素是这种图标 i 的第一种类型

- 保存在网站的索引页面相同的目录中，以.ico 格式保存
- 将以下行添加到 html 的 head 中以引用它

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```

::: warning tip
如果你的网站使用了内容安全策略，content security policy csp 这个策略会应用在在图标上，如果你遇到了图标没有被加载的问题，需要确认 csp 响应头的 img-src 指令没有禁止访问图标
:::

## html 中应用 css 和 js

- `link`元素
  `link`通常位于文档的头部，`link`元素有两个属性，`href`和`rel`
  `rel="stylesheet"` 表明这是文档的样式表 href 包含了样式表文件的路径

```html
<link rel="stylesheet" href="xxx.css" />
```

- `script`元素

script 不一定非要放在文档的 head 中，并包含 src 属性来只想需要加载的 js 文件路径，**最好加上 defer 以告诉浏览器在解析完成 html 后再加载 js**，这样可以确保再加在脚本之前浏览器已经解析了所有的 html 内容，如果脚本尝试访问某个不存在的元素，浏览器会报错，实际上还有很多方法可用于处理加载 js 的问题，但这是现代浏览器中最可靠的方法

```html
<script defer src="xxx.js"></script>
```

## 为文档设定主语言

值得一提的是可以为站点设定语言，这个可以通过添加 lang 属性到 html 开始的标签中来实现

html 语言设置好了，html 文档会被搜索引擎更有效地索引
