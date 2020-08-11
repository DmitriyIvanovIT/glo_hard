"use strict";
// ДЗ 2
let num = 266219,
res = 1;

while(num) {
    res *= num % 10;
    num = Math.floor(num / 10);
} 

console.log('Результат: ', res);
res **= 3;
console.log('Результат в третьей степени: ', res);
console.log(String(res).slice(0,2));

// ДЗ 3
// Задача 1
let lang = prompt('Введите название языка (ru/en)');

const langArr = [];
langArr['ru']  = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
langArr['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
}
else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}
else {console.log('Что-то пошло не так');
};

switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default: 
        console.log('Что-то пошло не так');
}

console.log(langArr[lang]);

// Задача 2
let namePerson = prompt('Введите имя?');

let result = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';

console.log(result);

// ДЗ 4
let strInput = prompt('Введите строку');

console.log(typeof strInput);
const stringOperation = str => {
    if (typeof str !== 'string') {
        return console.log('Введена не строка');
    };

    str = str.trim();
    if (str.length > 30) {
        str = str.substr(0, 30) + '...';
    }
    console.log(str);
};

stringOperation(strInput);