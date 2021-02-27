import switchingScreen from './modules/switching';
import generationQuiz from './modules/generation';
import countScore from './modules/score';

window.addEventListener('DOMContentLoaded', () => {

    const nextBtn = document.querySelector('.quiz__next');
    const answBtns = document.querySelectorAll('.quiz__answ');
    const questionsArray = [
        {
            question: 'Сочетательный закон умножения показан на формуле:',
            answ1: 'а+в=с',
            answ2: 'а*в*с=(а*в)*с',
            answ3: 'а+в-с=с',
            answ4: 'ав=р',
            trueAnswer: 'а*в*с=(а*в)*с'
        },
        {
            question: 'Верно ли, что цилиндр образован прямоугольником?',
            answ1: 'Да',
            answ2: 'Нет',
            answ3: 'Зависит от ситуации',
            answ4: 'Нет верного ответа',
            trueAnswer: 'Да'
        },
        {
            question: 'Вторая координата точки?',
            answ1: 'Абсцисса',
            answ2: 'Ордината',
            answ3: '1',
            answ4: '(0, 0)',
            trueAnswer: 'Ордината'
        },
        {
            question: 'Диагональ трапеции делит её среднюю линию на отрезки, равные 4 см и 3 см. Найдите меньшее основание трапеции.',
            answ1: '7',
            answ2: '5',
            answ3: '3',
            answ4: '6',
            trueAnswer: '6'
        },
        {
            question: '«Пропорция – это … двух отношений».',
            answ1: 'произведение',
            answ2: 'разность',
            answ3: 'частное',
            answ4: 'сумма',
            trueAnswer: 'частное'
        }
    ];

    

    generationQuiz({ // активация генератора вопроса
        selectorTrig: '.trig-btn', // кнопка, после которой будет генерация
        questionsArr: questionsArray, // массив с вопросами
        selectorBar: '.quiz__bar-progress', // прогресс бар, который меняется
        resetSelector: '.back', // reset btn
        blockSelector: '.quiz__block', // блок с вопросами
        nOfQuiestions: questionsArray.length 
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

    document.querySelector('.reset').addEventListener('click', () => {
        window.location.reload();
    });


    countScore({
        answersSelector: '.quiz__answ',
        nextBtnSelector: '.quiz__next'
    });
});