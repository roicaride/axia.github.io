// Smooth scroll para los botones CTA
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efectos de scroll en el hero
const hero = document.querySelector('.hero');
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video-container video');
const videoOverlay = document.querySelector('.video-overlay');
const heroContent = document.querySelector('.hero-content');
const heroButtons = document.querySelector('.hero-buttons');
const logoContainer = document.querySelector('.logo-container');

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            
            // Efecto parallax en el video
            if (scrolled < 500) {
                videoContainer.style.transform = `translateY(${scrolled * 0.2}px)`;
                video.style.transform = `scale(${1.1 + scrolled * 0.0002})`;
                videoOverlay.style.opacity = 0.1 + (scrolled * 0.001);
                
                // Efectos en el contenido
                heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
                heroContent.style.opacity = 1 - (scrolled * 0.002);
                heroButtons.style.transform = `translateY(${scrolled * 0.05}px)`;
                heroButtons.style.opacity = 1 - (scrolled * 0.003);
                logoContainer.style.transform = `translateY(${scrolled * 0.15}px)`;
                
                // Añadir clase scrolled cuando se hace scroll
                if (scrolled > 50) {
                    videoContainer.classList.add('scrolled');
                    videoOverlay.classList.add('scrolled');
                    heroContent.classList.add('scrolled');
                    heroButtons.classList.add('scrolled');
                    logoContainer.classList.add('scrolled');
                } else {
                    videoContainer.classList.remove('scrolled');
                    videoOverlay.classList.remove('scrolled');
                    heroContent.classList.remove('scrolled');
                    heroButtons.classList.remove('scrolled');
                    logoContainer.classList.remove('scrolled');
                }
            }
            
            ticking = false;
        });
        ticking = true;
    }
});

// Animación de scroll para las secciones con efecto de parallax
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// Animación suave de los botones CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Efecto hover mejorado para las tarjetas de características
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Efecto de aparición gradual para los elementos
const fadeInElements = document.querySelectorAll('.hero-content, .feature-card, .design-text, .tech-specs, .connection-features');
fadeInElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`;
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
}); 