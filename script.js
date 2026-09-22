document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('invitation-card');
    const cardCover = document.querySelector('.card-cover');

    // Toggle open state on click
    cardCover.addEventListener('click', () => {
        card.classList.toggle('is-open');
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
