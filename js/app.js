const app = {
    handleCodeCheck() {
        const input = document.getElementById('codeInput').value;
        const result = document.getElementById('result');
        
        if (codeValidator.isValidCode(input)) {
            result.classList.remove('hidden');
            heartEffects.createFloatingHearts();
            confettiEffects.fireConfetti();
        }
    }
};