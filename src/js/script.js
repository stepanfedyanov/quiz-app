import switchingScreen from './modules/switching';
import generate from './modules/generator';

window.addEventListener('DOMContentLoaded', () => {

    const nextBtn = document.querySelector('.quiz__next');

    generate({
        question: `Проверка`,
        answ1: 'Ответ 1',
        answ2: 'Ответ 2',
        answ3: 'Ответ 3',
        answ4: 'Ответ 4',
        trueAnswer: 'Ответ 1'
    });

    nextBtn.addEventListener('click', () => {
        generate({
            question: `Проверка кнопки`,
            answ1: 'Ответ 1',
            answ2: 'Ответ 2',
            answ3: 'Ответ 3',
            answ4: 'Ответ 4',
            trueAnswer: 'Ответ 1'
        });
    });

    switchingScreen({ // переключение на quiz
        from: '.main',
        to: '.quiz',
        btn: '.btn'
    });

    switchingScreen({ // переключение на main
        from: '.quiz',
        to: '.main',
        btn: '.back'
    });



});