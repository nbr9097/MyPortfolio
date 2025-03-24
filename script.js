// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Reveal animations on scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });

    // Timeline items reveal
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - revealPoint) {
            item.classList.add('visible');
        }
    });

    // Project cards reveal
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - revealPoint) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        }
    });

    // Education items reveal
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - revealPoint) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150);
        }
    });
}

// Initialize reveal on page load
window.addEventListener('scroll', reveal);
reveal(); // Call once to check for elements in view on page load

// Typing animation effect for hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('#hero');
    setTimeout(() => {
        heroSection.classList.add('loaded');
    }, 300);
});

// Dynamic year for copyright
document.querySelector('footer p:last-child').innerHTML = `&copy; ${new Date().getFullYear()} Noof Abdul Raheem. All rights reserved.`;