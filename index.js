'use strict';

const button = document.querySelector('button'), 
h1 = document.querySelector('h1'),
body = document.querySelector('body');

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

const randomInteger = function (min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
},
generationColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let number = randomInteger(0, 15);
        color +=  number > 9 ? arr[number - 10] : number;
        color += '';
    }

    body.style.backgroundColor = color;
    h1.textContent = color;
    button.style.color = color;
};

button.addEventListener('click', generationColor);

