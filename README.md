# canvas-loading

一个简单的Canvas加载进度

## 使用方法

在页面中添加结构和引入 js 文件：

```html
<div class="container js-container"></div>
<script src="./canvas-loading/main.js"></script>
```

使用 Loader 类生成实例：

```js
var loader = new Loader({
    container: '.js-container',
    width: 100,
    height: 100,
    color: 'white'
})
// 更新比例系数
loader.update(0.1)
```