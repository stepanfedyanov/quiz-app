import generate from './generator';
import addFinshScreen from './finish';
import {score} from './score';

function generationQuiz({
    selectorTrig, questionsArr, selectorBar, resetSelector, blockSelector, nOfQuiestions}) {

    const questions = questionsArr;
    const triggerBtns = document.querySelectorAll(selectorTrig);
    const progressBar = document.querySelector(selectorBar);
    const resetBtn = document.querySelector(resetSelector);
    const quizBlock = document.querySelector(blockSelector);

    let i = 0;

    resetBtn.addEventListener('click', () => {
        i = 0;
    });

    triggerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (i < questions.length) {
                const obj = questions[i];

                generate({
                    question: obj.question,
                    answ1: obj.answ1,
                    answ2: obj.answ2,
                    answ3: obj.answ3,
                    answ4: obj.answ4,
                    trueAnswer: obj.trueAnswer
                });
                progressBar.style.width = `${100/questions.length * i + 100/questions.length}%`;
                i++;
            } else {
                document.querySelector('.quiz__question').innerHTML = 'Загрузка';
                quizBlock.innerHTML = `
                <img src="icons/load.gif" class="quiz__loader">
                <p class="quiz__loader-text">Подождите, загрузка</p>`;
                setTimeout(addFinshScreen, 3000, score, nOfQuiestions);
            }
        });
    });
}

export default generationQuiz;