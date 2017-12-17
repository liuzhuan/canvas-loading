(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.CanvasLoading = factory());
}(this, (function () { 'use strict';

/**
 * 环形加载进度构造函数
 * @param {Object} options 
 * @param {string} container - canvas 所在容器
 * @param {number} width - canvas 宽度
 * @param {number} height - canvas 高度
 * @param {string} color - 颜色
 * @param {number} startAngle - 开始角度
 */
function Loader() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  this.ratio = 0;
  this.container = options.container || 'body';
  this.width = options.width || 100;
  this.height = options.height || 100;
  this.cx = this.width / 2;
  this.cy = this.height / 2;
  this.radius = this.cx - 1;
  this.color = options.color || 'white';
  this.startAngle = options.startAngle || -Math.PI / 2;
}

// update loader progression
Loader.prototype.update = function (val) {
  this.ratio = val;
  if (!this.context) {
    this.context = this.createContext();
  }

  this.drawSlice(val);
};

// 创建绘图的上下文
Loader.prototype.createContext = function () {
  var canvasContainer = document.querySelector(this.container);
  canvasContainer.innerHTML = '<canvas width="' + this.width + '" height="' + this.height + '" class="js-canvas"></canvas>';
  var canvas = document.querySelector(this.container + ' .js-canvas');
  var ctx = canvas.getContext('2d');
  return ctx;
};

Loader.prototype.drawSlice = function (ratio) {
  var ctx = this.context;
  var w = this.width;
  var h = this.height;
  var color = this.color;
  var cx = this.cx;
  var cy = this.cy;
  var radius = this.radius;
  var startAngle = this.startAngle;

  ctx.clearRect(0, 0, w, h);

  // draw the outer circle line
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.arc(cx, cy, radius, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = color;
  var endAngle = ratio * Math.PI * 2 + startAngle;
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, radius, startAngle, endAngle, false);
  ctx.lineTo(cx, cy);
  ctx.fill();
};

return Loader;

})));
