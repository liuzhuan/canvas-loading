const canvas = document.querySelector('.my-canvas')
const ctx = canvas.getContext('2d')

const w = canvas.width
const h = canvas.height
const cx = w / 2;
const cy = h / 2;
const radius = 40
const startAngle = -Math.PI/2


function drawSlice(ratio) {
  ctx.clearRect(0, 0, w, h)
  
  ctx.beginPath()
  ctx.strokeStyle = 'white'
  ctx.arc(cx, cy, radius, startAngle, Math.PI * 2 + startAngle, true)
  ctx.stroke()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.fillStyle = 'white'
  const endAngle = ratio * Math.PI * 2 + startAngle;
  ctx.moveTo(cx, cy)
  ctx.arc(cx, cy, radius, startAngle, endAngle, false)
  ctx.lineTo(cx, cy)
  ctx.fill()
}

canvas.onmousemove = function(e) {
  var ratio = (e.clientX / 100)
  drawSlice(ratio)
}