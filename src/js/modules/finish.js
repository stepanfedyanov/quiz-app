function addFinshScreen(score) {
    const quizBlock = document.querySelector('.quiz');
    const finishScreen = document.querySelector('.finish');
    const title = finishScreen.querySelector('.finish__title');
    const sub = finishScreen.querySelector('.finish__sub');

    quizBlock.classList.remove('on');
    finishScreen.classList.add('on');
    title.innerHTML = `Твоя оценка - ${score}`;

    if (+score < 3) {
        finishScreen.classList.add('fade');
        sub.innerHTML = `К сожалению, вы не прошли тест. Повторите материал и попробуйте снова`;
    }

    if (+score > 3) {
        finishScreen.classList.add('fade');
        sub.innerHTML = `Вы хорошо знаете математику, но пробелы в знаниях присутствуют.`;
    }

    if (+score === 5) {
        finishScreen.classList.add('fade');
        sub.innerHTML = `Вы отлично знаете темы!`;
    }
     
}

export default addFinshScreen;