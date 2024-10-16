"use strict";

(function () {
    const nameEl = document.querySelector('.register__name');
    const emailEl = document.querySelector('.register__email');
    const nameErrorEl = document.querySelector('.register__error-name');
    const emailErrorEl = document.querySelector('.register__error-email');
    const registerEl = document.querySelector('.register');

    const state = {
        hasNameError: false,
        hasEmailError: false,
    };

    function checkForNameError() {
        state.hasNameError = !nameEl.value;
    }

    function checkForEmailError() {
        state.hasEmailError = !emailEl.value;
    }

    function isFormValid() {
        return !state.hasNameError && !state.hasEmailError;
    }

    nameEl.addEventListener('input', () => {
        checkForNameError();
        render();
    });
    
    nameEl.addEventListener('blur', () => {
        checkForNameError();
        render();
    });
    
    emailEl.addEventListener('input', () => {
        checkForEmailError();
        render();
    });
    
    emailEl.addEventListener('blur', () => {
        checkForEmailError();
        render();
    });
    

    registerEl.addEventListener('submit', (e) => {
        checkForNameError();
        checkForEmailError();
    
        if (!isFormValid()) {
            e.preventDefault();
            render();
        } else {
            // Show success message or redirect
            alert("Form successfully submitted!");
        }
    });
    

    function render() {
        showNameError();
        showEmailError();
    }

    function showNameError() {
        if (state.hasNameError) {
            nameErrorEl.innerText = 'Please enter your name';
        } else {
            nameErrorEl.innerText = '';
        }
    }

    function showEmailError() {
        if (state.hasEmailError) {
            emailErrorEl.innerText = 'Please enter your email';
        } else {
            emailErrorEl.innerText = '';
        }
    }
})
function createStars() {
    const app = document.getElementById('app');
    console.log("Creating stars...");  // 检查函数是否被调用
    for (let i = 0; i < 30; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        let top = Math.random() * window.innerHeight;
        let left = Math.random() * window.innerWidth;
        let delay = Math.random() * 10;

        star.style.top = top + 'px';
        star.style.left = left + 'px';
        star.style.animationDelay = delay + 's';

        console.log("Appending star: ", star);  // 检查每个星星是否被生成
        app.appendChild(star);  // 插入星星
    }
}

window.addEventListener('load', function() {
    createStars();
});




