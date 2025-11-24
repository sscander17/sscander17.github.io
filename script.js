// Cursor Glow Effect
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.cursor-glow');
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .project-card').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Add CSS for reveal animation
const style = document.createElement('style');
style.innerHTML = `
    .hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    .visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Glitch Text Effect (Simple)
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    setInterval(() => {
        glitchText.style.textShadow = `
            ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #00f2ff,
            ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #bd00ff
        `;
        setTimeout(() => {
            glitchText.style.textShadow = 'none';
        }, 100);
    }, 3000);
}
