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
})();

