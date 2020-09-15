document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const valute = document.querySelector('.valute'),
        valuteInput = document.querySelector('.valute-input'),
        valuteNew = document.querySelector('.valute__new'),
        valuteNewInput = document.querySelector('.valute__new-input');

    const getData = url => {
            return fetch(url);
        },
        convertValute = () => {
            if (valute.value !== '' &&
                valuteInput.value.trim() !== '' &&
                valuteNew.value !== '') {
                let urlAPI = `https://api.exchangeratesapi.io/latest?base=${valute.value}&symbols=${valuteNew.value}`;

                getData(urlAPI)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(`Ошибка ${response.status}!`);
                        }
                        return (response.json());
                    })
                    .then(data => {
                        if (typeof parseFloat(valuteInput.value) === 'number') {
                            valuteNewInput.value = (parseFloat(valuteInput.value) * data.rates[valuteNew.value]).toFixed(2);
                        } else {
                            alert('Введите число');
                        }
                    })
                    .catch(error => console.error(error));
            } else {
                valuteNewInput.value = '';
            }
        };


    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', event => {
            const parent = event.target.closest('.block'),
                title = parent.querySelector('h2'),
                options = select.querySelectorAll('option');
            options.forEach(item => {
                if (item.value === select.value) {
                    title.textContent = item.textContent;
                }
            });
            convertValute();
        });
    });

    valuteInput.addEventListener('input', convertValute);

});