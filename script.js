'use strict';
const canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
color = document.getElementById('color'),
widthBrush = document.getElementById('width-brush');

color.addEventListener('input', () => ctx.strokeStyle = color.value);
widthBrush.addEventListener('input', () => ctx.lineWidth = widthBrush.value);

canvas.addEventListener('mousemove', event => {
    const x = event.offsetX,
    y = event.offsetY,
    mx = event.movementX,
    my = event.movementY;

    if (event.buttons > 0) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x - mx, y - my);
        ctx.stroke();
        ctx.closePath();
    }
});
