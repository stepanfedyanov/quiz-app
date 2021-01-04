function generate({question, answ1, answ2, answ3, answ4, trueAnswer}) {
    class GuestionGenerator {
        constructor(guestion, answ1, answ2, answ3, answ4, trueAnswer) {
            this.guestion = question;
            this.answers = [answ1, answ2, answ3, answ4];
            this.trueAnswer = trueAnswer;
        }
        pasteQuestion() {
            const questionBlock = document.querySelector('.quiz__question'),
                  questionAnswers = document.querySelectorAll('.quiz__answ');
            let i = 0;
            
            questionBlock.innerHTML = this.guestion;

            questionAnswers.forEach(btn => {
                if (this.answers[i] === this.trueAnswer) {
                    btn.dataset.true = 1;
                }
                btn.innerHTML = this.answers[i];
                i++;
            });
        }
    }

    new GuestionGenerator(question, answ1, answ2, answ3, answ4, trueAnswer)
    .pasteQuestion();
}

export default generate;