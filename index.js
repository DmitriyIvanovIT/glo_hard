'use strict';

const cub = document.querySelector('.cub'),
    play = document.querySelector('.play'),
    reset = document.querySelector('.reset');

let left = 0,
    topLengt = 0;

let driveCub;

let animate = false;

const driverCub = () => {
    driveCub = requestAnimationFrame(driverCub);
    if (left < 600 && topLengt === 0) {
        left++;
        cub.style.left = left + 'px';
    } else if (left === 600 && topLengt < 300) {
        topLengt++;
        cub.style.top = topLengt + 'px';
    } else if (left > 0 && topLengt > 0) {
        left -= 2;
        topLengt--;
        cub.style.left = left + 'px';
        cub.style.top = topLengt + 'px';
    }
};


play.addEventListener('click', () => {
    reset.disabled = false;
    if (animate) {
        cancelAnimationFrame(driveCub);
        play.textContent = 'play';

        animate = false;
    } else {
        animate = true;
        play.textContent = 'pause';
        driveCub = requestAnimationFrame(driverCub);
    }

});

reset.addEventListener('click', () => {
    cancelAnimationFrame(driveCub);
    play.textContent = 'play';
    left = 0;
    topLengt = 0;
    cub.style.left = left + 'px';
    cub.style.top = topLengt + 'px';
    reset.disabled = true;
});