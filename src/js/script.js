import switchingScreen from './modules/switching';

window.addEventListener('DOMContentLoaded', () => {

    switchingScreen({ // переключение на quiz
        from: '.main',
        to: '.quiz',
        btn: '.btn'
    });

    switchingScreen({ // переключение на main
        from: '.quiz',
        to: '.main',
        btn: '.back'
    });

});