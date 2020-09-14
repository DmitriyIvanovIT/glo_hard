document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const getData = () => new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', './cars.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                resolve(JSON.parse(request.responseText));
            } else {
                output.innerHTML = 'Произошла ошибка';
                reject(request.status);
            }
        });
    }), 
    changeCar = data => {
        data.cars.forEach(item => {
            if (item.brand === select.value) {
                const {brand, model, price} = item;
                output.innerHTML = `Тачка ${brand} ${model} <br>
                Цена: ${price}$`;
            }
        });
    };

    select.addEventListener('change', () => {
        getData()
            .then(changeCar)
            .catch(error => output.innerHTML = `Произошла ошибка ${error}`);
    });

});