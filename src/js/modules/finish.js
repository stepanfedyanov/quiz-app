function addFinshScreen(score, nOfQuiestions) {
    const quizBlock = document.querySelector('.quiz');
    const finishScreen = document.querySelector('.finish');
    const title = finishScreen.querySelector('.finish__title');
    const sub = finishScreen.querySelector('.finish__sub');

    const trueProcent = score * 100 / nOfQuiestions; 
    console.log(trueProcent);
    
    if (trueProcent < 50) {
        title.innerHTML = `Твоя оценка - 2`;
        finishScreen.classList.add('fade');
        sub.innerHTML = `К сожалению, вы не прошли тест. Повторите материал и попробуйте снова`;
    }

    if (trueProcent >= 50 && trueProcent < 65) {
        title.innerHTML = `Твоя оценка - 3`;
        finishScreen.classList.add('fade');
        sub.innerHTML = `Вы хорошо математику, но пробелы в знаниях присутствуют.`;
    }

    if (trueProcent >= 65 && trueProcent < 85) {
        title.innerHTML = `Твоя оценка - 4`;
        finishScreen.classList.add('fade');
        sub.innerHTML = `Вы хорошо знаете математику, но некоторый материал повторить все таки нужно`;
    }

    if (trueProcent >= 85) {
        title.innerHTML = `Твоя оценка - 5`;
        finishScreen.classList.add('fade');
        sub.innerHTML = `Вы отлично знаете темы!`;
    }

    
    quizBlock.classList.remove('on');
    finishScreen.classList.add('on');
}

export default addFinshScreen;