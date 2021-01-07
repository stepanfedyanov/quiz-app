function addFinshScreen(score) {
    const quizBlock = document.querySelector('.quiz');
    const finishScreen = document.querySelector('.finish');
    const title = finishScreen.querySelector('.finish__title');
    const sub = finishScreen.querySelector('.finish__sub');

    quizBlock.classList.remove('on');
    finishScreen.classList.add('on');
    title.innerHTML = `Твоя оценка - ${score}`;

    if (+score < 3) {
        sub.innerHTML = `К сожалению, вы не прошли тест. Повторите материал и повторите`;
    }

    if (+score > 3) {
        sub.innerHTML = `Вы знаете эту тему, но пробелы в знаниях присутвуют.`;
    }

    if (+score === 5) {
        sub.innerHTML = `Вы отлично знаете тему!`;
    }
     
}

export default addFinshScreen;