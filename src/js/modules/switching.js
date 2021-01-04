function switchingScreen() {
    const main = document.querySelector('.main'),
          quiz = document.querySelector('.quiz'),
          triggerBtn = document.querySelector('.btn');
    
    triggerBtn.addEventListener('click', () => {
        main.classList.remove('on');
        quiz.classList.add('on');
    });
}

export default switchingScreen;