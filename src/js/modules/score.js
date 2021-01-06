let score = 0;

function countScore() {
    const answersBlocks = document.querySelectorAll('.quiz__answ');
    const nextBtn = document.querySelector('.quiz__next');

    function checkBtn(btn) {
        answersBlocks.forEach(btn => unCheckBtn(btn));
        btn.classList.add('checked');
        nextBtn.classList.add('on');
        if (btn.dataset.true == 1) {
            score++;
            console.log(score);
        }
    }

    function unCheckBtn(btn) {
        if (btn.classList.contains('checked')) {
            if (btn.dataset.true == 1) {
                score--;
                console.log(score);
            }
        }
        btn.classList.remove('checked');
        nextBtn.classList.remove('on');
        
    }

    answersBlocks.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn.classList.contains('checked')) {
                checkBtn(btn);
            } else {
                unCheckBtn(btn);
            }
        });
    });

    nextBtn.addEventListener('click', () => {
        answersBlocks.forEach(btn => btn.classList.remove('checked'));
        console.log(score);
    });

}

export {score};
export default countScore;