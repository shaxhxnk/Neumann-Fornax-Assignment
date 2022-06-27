var count = 0;
var precclickX = 0;
var prevclickY = 0;
var firstclickX = 0;
var firstclickY = 0;
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
window.onresize = function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
};
function draw(e) {
  var pos = getCursorPosition(c, e);
  var clickX = pos.x;
  var clickY = pos.y;

  ctx.fillStyle = "#bbb";
  ctx.beginPath();
  ctx.arc(clickX, clickY, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.globalCompositeOperation = 'destination-over';
  console.log(clickX, clickY);
  console.log("drawcircle");
  count++;
  console.log(count);
  console.log(precclickX);
  console.log(prevclickY);
  console.log(firstclickX);
  console.log(firstclickX);
  if (count == 1) {
    firstclickX = clickX;
    firstclickY = clickY;
  }

  if (count >= 2) {
    drawLine(
      ctx,
      [precclickX, prevclickY],
      [clickX, clickY],
      "rgb(124, 120, 120)",
      5
    );
  }

  precclickX = pos.x;
  prevclickY = pos.y;
  if (count == 4) {
    drawLine(
      ctx,
      [firstclickX, firstclickY],
      [clickX, clickY],
      "rgb(124, 120, 120)",
      5
    );
    count = 0;
  }
}
function getCursorPosition(canvas, e) {
  rect = canvas.getBoundingClientRect();
  console.log("getcursorpos");
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function drawLine(ctx, begin, end, stroke = "rgb(124, 120, 120)", width = 1) {
  if (stroke) {
    ctx.strokeStyle = stroke;
  }

  if (width) {
    ctx.lineWidth = width;
  }

  ctx.beginPath();
  ctx.moveTo(...begin);
  ctx.lineTo(...end);
  ctx.stroke();
}
window.draw = draw;
