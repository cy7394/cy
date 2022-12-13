# `iframe`

`<iframe>`元素允许你将其他 web 文档嵌入到当前文档中。

```html
<iframe
  src="https://www.bilibili.com/"
  width="650"
  height="400"
  frameborder="0"
>
  <p>
    <a href="https://www.bilibili.com/"
      >由于浏览器不支持iframe，点击此处跳转到b站</a
    >
  </p>
</iframe>
```

## allowfullscreen

如果设置，`<iframe>`则可以通过全屏 api 设置为全屏模式

## frameborder

如果设置为 1，则会告诉浏览器在此框架和其他框架绘制边框，这是默认行为。0 删除边框

## src

指向要嵌入文档的 url 路径

## `width`和`height`

这些属性指定你想要的 iframe 的宽度和高度

## 备选内容

在`<iframe></iframe>`标签之间包含备选内容，如果浏览器不支持`<iframe>`，将会显示备选内容。

## sandbox

IE10 及更高版本但稍微更现代的浏览器才能工作，该属性可以提高安全性设置
