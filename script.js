"use strict";
// ДЗ 7
const weekUl = document.querySelector('.week');
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let date = new Date();

let today = (date.getDay() !== 0) ? (date.getDay() - 1) : 6;

weekUl.textContent = '';
week.forEach((item, i) => {
    weekUl.insertAdjacentHTML('beforeend', `
        <li class="day-week${(i === 5 || i === 6) ? ' weekend' : ''}${(i === today)? ' today' : ''}">
            ${item}
        </li>
    `)
});