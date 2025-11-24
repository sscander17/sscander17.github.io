```
const avatar = document.querySelector('.avatar-wrapper');
const speechBubble = document.getElementById('speech-bubble');

// Physics state
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let avatarX = window.innerWidth / 2;
let avatarY = window.innerHeight / 2;

// Smooth follow config
const delay = 0.08; // Lower = faster follow

// Idle animation state
let time = 0;

function animate() {
    // Calculate distance to target
    const distX = mouseX - avatarX;
    const distY = mouseY - avatarY;
    
    // Smoothly move towards mouse
    avatarX += distX * delay;
    avatarY += distY * delay;
    
    // Add idle "bobbing" (dancing)
    time += 0.05;
    const bobY = Math.sin(time) * 10; // Up and down
    const bobX = Math.cos(time * 0.5) * 5; // Side to side
    
    // Apply transform
    // We offset by 100px (half of width/height) to center it
    avatar.style.transform = `translate(${ avatarX - 100 + bobX}px, ${ avatarY - 100 + bobY}px)`;
    
    // Move speech bubble with it
    if(speechBubble) {
        speechBubble.style.left = `${ avatarX + 60 } px`;
        speechBubble.style.top = `${ avatarY - 80 + bobY } px`;
    }
    
    requestAnimationFrame(animate);
}

// Track mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Speech Bubble Interaction
const phrases = [
    "Yo! 👋",
    "Nice Click! 🎾",
    "Munich Vibes 🥨",
    "Anti-Drone Mode 🛡️",
    "Let's Code! 💻"
];

document.addEventListener('click', () => {
    if(speechBubble) {
        // Pick random phrase
        const text = phrases[Math.floor(Math.random() * phrases.length)];
        speechBubble.textContent = text;
        
        // Show bubble
        speechBubble.style.opacity = 1;
        
        // Spin avatar
        avatar.style.transition = 'transform 0.5s ease';
        avatar.style.transform += ' rotate(360deg)';
        
        // Hide after 2s
        setTimeout(() => {
            speechBubble.style.opacity = 0;
            // Reset transition for physics loop
            setTimeout(() => {
                avatar.style.transition = 'transform 0.1s linear';
            }, 500);
        }, 2000);
    }
});

// Start loop
animate();
```
