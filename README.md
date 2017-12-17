# canvas-loading

一个简单的扇形 Canvas 加载进度，效果参见[在线 demo][live-demo]。

## 使用方法

### 在 `<script>` 标签直接引入

在页面中添加结构，并引入 js 文件：

```html
<div class="container js-container"></div>
<script src="//unpkg.com/liuz-canvas-loading"></script>
```

使用 `CanvasLoading` 类生成实例：

```javascript
var loader = new CanvasLoading({
    container: '.js-container', // 画布容器，必填
    width: 100,                 // 画布宽度
    height: 100,                // 画布高度
    color: 'white'              // 图形颜色
})
// 更新比例系数
loader.update(0.1)
```

### 使用 npm

安装 `liuz-canvas-loading`：

```
npm install --save liuz-canvas-loading
```

在 javascript 中使用：

```javascript
import CanvasLoading from 'liuz-canvas-loading'

const loader = new CanvasLoading({
    container: '.js-container'
    width: 100,
    height: 100,
    color: 'green',
})

loader.update(0.25)
```

[live-demo]: http://jsbin.com/guranugele/1/edit?html,js,output