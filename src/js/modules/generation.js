import generate from './generator';

function generationQuiz({
    selectorTrig, questionsArr, selectorBar, resetSelector}) {

    const questions = questionsArr;
    const triggerBtns = document.querySelectorAll(selectorTrig);
    const progressBar = document.querySelector(selectorBar);
    const resetBtn = document.querySelector(resetSelector);

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
            }    
        });
    });
}

export default generationQuiz;