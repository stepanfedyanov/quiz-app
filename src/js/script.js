import switchingScreen from './modules/switching';
import generate from './modules/generator';

window.addEventListener('DOMContentLoaded', () => {

    const questions = [
        {
            question: 'Вопрос 1',
            answ1: 'Правильный ответ',
            answ2: 'Неверный ответ',
            answ3: 'Неверный ответ',
            answ4: 'Неверный ответ'
        },
        {
            question: 'Вопрос 2',
            answ1: 'Неверный ответ',
            answ2: 'Правильный ответ',
            answ3: 'Неверный ответ',
            answ4: 'Неверный ответ'
        },
        {
            question: 'Вопрос 3',
            answ1: 'Неверный ответ',
            answ2: 'Неверный ответ',
            answ3: 'Правильный ответ',
            answ4: 'Неверный ответ'
        },
        {
            question: 'Вопрос 4',
            answ1: 'Неверный ответ',
            answ2: 'Неверный ответ',
            answ3: 'Неверный ответ',
            answ4: 'Правильный ответ'
        }
    ];

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