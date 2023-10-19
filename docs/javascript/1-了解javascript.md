# javascript
javascript是一种脚本，一门编程语言
- 可以在网页上实现复杂的功能
- 网页展现给你的不再是简单的静态信息，而是实时的内容更新，交互的地图，2d/3d动画，滚动播放的视频等等

## 应用程序接口
application programming interfaces
简称api，api将为你的代码提供额外的超能力


api是已经建立好的一套代码组件，可以让开发者实现原本很难甚至无法实现的程序


api通常分为两类
**浏览器api和第三方api**

浏览器api 内建于web浏览器中
可以将数据从周边计算机环境中筛选出来，还可以做实用的复杂工作


- 文档对象模型 api 
能通过创建、移除、修改html

- 地理位置api
获取地理信息
谷歌地图可以找到你的位置，而且标示在地图上

- 画布canvas和webGL api
可以创建生动的2d和3d图像

- htmlMediaElment和webRTC等影音类api
可以利用媒体

第三方api并没默认嵌入浏览器中
可以从网上取得他们的代码和信息


## js在页面上做了什么？


浏览器在读取一个网页时，代码将在一个运行环境中得到执行

在html和css集合组装成一个网页后，浏览器的js引擎将执行js代码
保证了当js开始运行之前 网页的结构和样式已经就位


js最普遍的用处是通过DOM api 动态修改html和css来更新用户界面 user interface 


## 浏览器安全
- 每个浏览器标签页就是其自身用来运行代码的独立容器，称为运行环境
- 每个标签页中的代码完全独立运行，而且一个标签页中的代码不能直接影响另一个标签页中的代码



## 解释和编译

解释型语言：
- 代码自上而下运行 且实时返回运行结果
- 代码在由浏览器执行前 不需要将其转化为其他形式
- 直接以文本格式text form 被接受和处理


编译型语言：
- 需要先将代码转化成另一种形式才能运行
- 比如c/c++先被编译成汇编语言，然后才能由计算机运行
- 将以二进制的格式运行，二进制内容是由程序员源代码产生的

>js是轻量级解释型语言，js转换器运用了一种叫做即时编译just- in-time compiling的技术，当js源代码被执行时，它会被编译成二进制的格式，是代码运行速度更快，尽管如此，仍然是一门解释型语言，因为编译过程发生在代码运行中。


## 服务端代码vs客户端代码
- 服务端代码： 在服务器上运行，接着运行结果才由浏览器下载并展示出来
- 客户端代码： 在用户的电脑上运行的代码，在浏览一个网页时，它的客户端代码就会被下载，然后由浏览器来运行并展示


## 动态代码vs静态代码
- 动态：通过按需生成新内容来更新web页面/应用，是的不同环境下显示不同内容
- 静态：没有动态更新内容的网页，所显示的内容不会改变

## 内部js

```html
<!DOCTYPE html>
<html lang="zh-Hans">
  <head>
    <meta charset="utf-8" />
    <title>使用 JavaScript 的示例</title>
    <script>
      // 在此编写js代码
      document.addEventListener("DOMContentLoaded", function () {
        function createdParagraph() {
          let para = document.createElement("p");
          para.textContent = "你点击了按钮";
          document.body.appendChild(para);
        }

        const buttons = document.querySelectorAll("button");
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", createdParagraph);
        }
      });
    </script>
  </head>
  <body>
    <button>点我呀</button>
  </body>
</html>
```
`document.addEventListener('DOMContentLoaded',function(){...})`
这是一个**事件监听器，监听浏览器的'DOMContentLoaded'事件，即html文档体加载、解释完毕事件**，事件触发时将调用"..."处代码




## 外部js
```html
<!DOCTYPE html>
<html lang="zh-Hans">
  <head>
    <meta charset="utf-8" />
    <title>使用 JavaScript 的示例</title>
    <script async src="./script.js"></script>
  </head>
  <body>
    <button>点我呀</button>
  </body>
</html>
```
**async异步属性，告知浏览器在遇到script元素时不要中断后续html内容加载**


在同级目录中新建script.js，内容同上


## 内联js处理器
```html
<!DOCTYPE html>
<html lang="zh-Hans">
  <head>
    <meta charset="utf-8" />
    <title>使用 JavaScript 的示例</title>
    <script>
      function createP() {
        const para= document.createElement("p")
        para.textContent = "你点击了这个按钮"
        document.body.appendChild(para);
      }
    </script>
  </head>
  <body>
    <button onclick="createP()">点我呀</button>
  </body>
</html>
```

**这种写法会使js污染到html，而且效率低下，对于每个需要应用到js的按钮，都得手动添加onclick="createP()"属性**


## async和defer
浏览器遇到async脚本时不会阻塞页面渲染，而是直接下载然后运行，这样脚本的运行次序就无法控制，只是脚本不会阻止剩余页面的显示
当页面脚本彼此独立，且不依赖本页面的其他任何脚本时，async时最理想的选择



如果页面想要加载三个脚本，如果不加defer三者的调用顺序是不确定的，但是后面两个有需要依赖jquery
此时就可以使用defer
```html
<script defer src="js/vendor/jauery.js"></script>
<script defer src="js/script1.js"></script>
<script defer src="js/script2.js"></script>
```
脚本调用策略小结：
- 如果脚本无需等待页面解析，且无依赖独立运行，应使用async
- 如果脚本需要等待页面解析，且依赖于其他脚本，调用这些脚本时应使用defer，将关联的脚本按所需顺序置于html中

## 注释
- Ctrl+/ 
单行注释
```javascript
  // 我是注释
```

- Shift+Alt+A
多行注释
```javascript
/*  
  我是
  注释
*/
```





