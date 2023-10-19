**问题描述：**

一个 div 循坏，实现第一列两个格子，第二列四个格子，高度铺满。

**解决方案：**

```html
<div>
  <div class="item"></div>
</div>
```

```scss
div {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(4, 1fr);
}
.item {
  border: 1px solid black;
}
.item:nth-child(1),
.item:nth-child(4) {
  grid-row: span 2;
}
```
