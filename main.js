/**
 * 环形加载进度构造函数
 * @param {Object} options 
 * @param {string} container - canvas 所在容器
 * @param {number} width - canvas 宽度
 * @param {number} height - canvas 高度
 * @param {string} color - 颜色
 */
function Loader(options = {}) {
  this.ratio = 0;
  this.container = options.container || 'body'
  this.width = options.width || 100;
  this.height = options.height || 100;
  this.cx = this.width / 2;
  this.cy = this.height / 2;
  this.radius = this.cx - 1;
  this.color = options.color || 'white';
  this.startAngle = - Math.PI / 2;
}

Loader.prototype.set = function(val) {
  this.ratio = val;
  if (!this.context) {
    this.context = this.createContext()
  }

  this.drawSlice(val)
}

Loader.prototype.createContext = function() {
  const canvasContainer = document.querySelector(this.container)
  canvasContainer.innerHTML = `<canvas width="${this.width}" height="${this.height}" class="js-canvas"></canvas>`
  const canvas = document.querySelector(this.container + ' .js-canvas')
  const ctx = canvas.getContext('2d')
  return ctx
}

Loader.prototype.drawSlice = function(ratio) {
  const ctx = this.context;
  const w = this.width;
  const h = this.height;
  const color = this.color;
  const cx = this.cx;
  const cy = this.cy;
  const radius = this.radius;
  const startAngle = this.startAngle;

  ctx.clearRect(0, 0, w, h)
  
  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.arc(cx, cy, radius, startAngle, Math.PI * 2 + startAngle, true)
  ctx.stroke()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.fillStyle = color
  const endAngle = ratio * Math.PI * 2 + startAngle;
  ctx.moveTo(cx, cy)
  ctx.arc(cx, cy, radius, startAngle, endAngle, false)
  ctx.lineTo(cx, cy)
  ctx.fill()
}