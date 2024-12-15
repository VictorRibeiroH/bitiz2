const heartEffects = {
    createFloatingHearts() {
        const container = document.querySelector('.floating-hearts');
        container.innerHTML = '';
        
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);
        }
    }
};