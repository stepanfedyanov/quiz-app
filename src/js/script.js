import switchingScreen from './modules/switching';
import generationQuiz from './modules/generation';
import countScore from './modules/score';

window.addEventListener('DOMContentLoaded', () => {

    const nextBtn = document.querySelector('.quiz__next');
    const answBtns = document.querySelectorAll('.quiz__answ');
    const questionsArray = [
        {
            question: 'Вопрос 1',
            answ1: 'Верный ответ',
            answ2: 'Неверный ответ',
            answ3: 'Неверный ответ',
            answ4: 'Неверный ответ',
            trueAnswer: 'Верный ответ'
        },
        {
            question: 'Вопрос 2',
            answ1: 'Неверный ответ',
            answ2: 'Верный ответ',
            answ3: 'Неверный ответ',
            answ4: 'Неверный ответ',
            trueAnswer: 'Верный ответ'
        },
        {
            question: 'Вопрос 3',
            answ1: 'Неверный ответ',
            answ2: 'Неверный ответ',
            answ3: 'Верный ответ',
            answ4: 'Неверный ответ',
            trueAnswer: 'Верный ответ'
        },
        {
            question: 'Вопрос 4',
            answ1: 'Неверный ответ',
            answ2: 'Неверный ответ',
            answ3: 'Неверный ответ',
            answ4: 'Верный ответ',
            trueAnswer: 'Верный ответ'
        }
    ];

    

    generationQuiz({ // активация генератора вопроса
        selectorTrig: '.trig-btn', // кнопка, после которой будет генерация
        questionsArr: questionsArray, // массив с вопросами
        selectorBar: '.quiz__bar-progress', // прогресс бар, который меняется
        resetSelector: '.back'
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

    countScore();

    


});