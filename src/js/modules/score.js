let score = 0;

function countScore({answersSelector, nextBtnSelector}) {
    const answersBlocks = document.querySelectorAll(answersSelector);
    const nextBtn = document.querySelector(nextBtnSelector);

    function checkBtn(btn) {
        answersBlocks.forEach(btn => unCheckBtn(btn));
        btn.classList.add('checked');
        nextBtn.classList.add('on', 'fade');
        if (btn.dataset.true == 1) {
            score++;
        }
    }

    function unCheckBtn(btn) {
        if (btn.classList.contains('checked')) {
            if (btn.dataset.true == 1) {
                score--;
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
        answersBlocks.forEach(btn => {
            btn.classList.remove('checked');
            nextBtn.classList.remove('on');
            
        });
    });
}

export {score};
export default countScore;