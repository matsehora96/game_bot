'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let userNumber,
    systemNumber = Math.floor(Math.random() * 100);

const validation = data => {
    
    if (data === null) {
        return alert("Конец игры");
    }
    
    if (!isNumber(data)) {
        validation(prompt('Введи число!'));
    }

    if (data > systemNumber) {
        validation(prompt('Загадачное число меньше. Введите новый вариант'));
    } else if (data < systemNumber) {
        validation(prompt('Загадачное число больше. Введите новый вариант'));
    } else if (data == systemNumber) {
        return alert("Поздравляем! Вы угадали.");
    }

};

userNumber = validation(prompt("Угадай число от 1 до 100"));



