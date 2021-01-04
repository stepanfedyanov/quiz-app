function switchingScreen({from, to, btn}) {
    const switchFrom = document.querySelector(from),
          switchTo = document.querySelector(to),
          triggerBtn = document.querySelector(btn);
    
    triggerBtn.addEventListener('click', () => {
        switchFrom.classList.remove('on');
        switchTo.classList.add('on');
    });
}

export default switchingScreen;