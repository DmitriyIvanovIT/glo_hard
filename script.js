"use strict";
// ДЗ 2

// ДЗ 7
const weekUl = document.querySelector('.week');
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let date = new Date();

weekUl.textContent = '';
week.forEach((item, i) => {
    weekUl.insertAdjacentHTML('beforeend', `
        <li class="day-week${(i === 5 || i === 6) ? ' weekend' : ''}${(i === date.getDay() - 1 )? ' today' : ''}">
            ${item}
        </li>
    `)
});