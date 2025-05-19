// Toggle navbar for mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};

// Typing animation
const textSpan = document.querySelector('.text-animation span');
const phrases = ['Web Developer', 'Student', 'Tech Enthusiast'];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 150;

function typeEffect() {
    const currentPhrase = phrases[index];
    if (isDeleting) {
        textSpan.textContent = currentPhrase.substring(0, charIndex--);
        delay = 100;
    } else {
        textSpan.textContent = currentPhrase.substring(0, charIndex++);
        delay = 150;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % phrases.length;
        delay = 500;
    }

    setTimeout(typeEffect, delay);
}
typeEffect();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
