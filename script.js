'use strict';
const canvas = document.getElementById('canvas').getContext('2d');
const radius = 50;

const circles = [
  {
    color:'blue',
    x : 2*radius - radius/2,
    y : 2*radius,
    isTop: true
  } , {
    color:'black',
    x : 4*radius,
    y : 2*radius,
    isTop: true
  } , {
    color:'red',
    x : 6*radius + radius/2,
    y : 2*radius,
    isTop: true
  } , {
    color:'yellow',
    x : 3*radius - radius/4,
    y : 3*radius,
    isTop: false
  } , {
    color:'green',
    x : 5*radius + radius/4,
    y : 3*radius,
    isTop: false
  }
];

const drawArc = (canvas, color, x, y, start, end) => {

  canvas.lineWidth = 10;
  canvas.strokeStyle = color;

  canvas.beginPath();
  canvas.arc(x, y, radius, start - Math.PI/2, end - Math.PI/2, true);
  canvas.stroke();
}

circles.forEach(circle => {
  drawArc(canvas, circle.color, circle.x, circle.y, 0, Math.PI*2);
});

circles.forEach(circle => {
  if (circle.isTop) {
    drawArc(canvas, circle.color, circle.x, circle.y, 0, Math.PI/3);
    drawArc(canvas, circle.color, circle.x, circle.y, Math.PI*2/3, Math.PI/3);
  } else {
    drawArc(canvas, circle.color, circle.x, circle.y, Math.PI/6, 0); 
    drawArc(canvas, circle.color, circle.x, circle.y, Math.PI*5/3, Math.PI*4/3);
  }
});
