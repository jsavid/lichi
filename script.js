document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('invitation-card');
    const cardCover = document.querySelector('.card-cover');

    // Music setup
    let audio = new Audio('Here_comes_the_sun.mp3');
    audio.loop = true;

    function openCard() {
        if (!card.classList.contains('is-open')) {
            card.classList.add('is-open');
            audio.play().catch(e => console.log('Esperando interacción para audio:', e));
        }
    }

    function closeCard() {
        if (card.classList.contains('is-open')) {
            card.classList.remove('is-open');
            audio.pause();
        }
    }

    // Toggle open state on click
    cardCover.addEventListener('click', () => {
        if (card.classList.contains('is-open')) {
            closeCard();
        } else {
            openCard();
        }
    });

    // Swipe logic
    let startX = 0;
    let endX = 0;

    function handleSwipe() {
        const threshold = 50;
        if (startX - endX > threshold) {
            // Swiped left (Right to Left) -> Open
            openCard();
        } else if (endX - startX > threshold) {
            // Swiped right (Left to Right) -> Close
            closeCard();
        }
    }

    // Touch events
    document.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    // Mouse events
    let isMouseDown = false;
    document.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.screenX;
    });

    document.addEventListener('mouseup', (e) => {
        if (isMouseDown) {
            endX = e.screenX;
            handleSwipe();
            isMouseDown = false;
        }
    });
    
    // Also allow clicking anywhere on the wrapper to open/close
    // document.querySelector('.invitation-wrapper').addEventListener('click', () => {
    //    card.classList.toggle('is-open');
    // });

    // Generate floating particles for background
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 2; // 2px to 7px
        const posX = Math.random() * 100; // 0% to 100%
        const delay = Math.random() * 10; // 0s to 10s
        const duration = Math.random() * 10 + 10; // 10s to 20s
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.top = `100vh`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
});
