const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
const heroSlides = document.querySelectorAll('.hero-slide');
const slideshowDots = document.querySelectorAll('.slideshow-dot');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const testimonials = document.querySelectorAll('.testimonial');
const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');
let currentHeroSlide = 0;
let currentTestimonial = 0;
let heroSlideInterval;

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Sticky Header
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 100);
    backToTop.classList.toggle('visible', window.scrollY > 300);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            navLinks.classList.remove('active');
            mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero Slideshow
function showHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    slideshowDots.forEach(dot => dot.classList.remove('active'));
    heroSlides[index].classList.add('active');
    slideshowDots[index].classList.add('active');
    currentHeroSlide = index;
}

function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
}

function startHeroSlideshow() {
    heroSlideInterval = setInterval(nextHeroSlide, 5000);
}

function stopHeroSlideshow() {
    clearInterval(heroSlideInterval);
}

slideshowDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopHeroSlideshow();
        showHeroSlide(index);
        startHeroSlideshow();
    });
});

document.querySelector('.hero').addEventListener('mouseenter', stopHeroSlideshow);
document.querySelector('.hero').addEventListener('mouseleave', startHeroSlideshow);

startHeroSlideshow();

// Destination Tabs
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Dropdown Menu Tabs
document.querySelectorAll('.dropdown-menu .tab-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tabId = link.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
        navLinks.classList.remove('active');
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        const targetElement = document.getElementById('destinations');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Auto-open correct tab when URL has #wildlife-tab, #mountains-lakes-tab, etc.
  document.addEventListener("DOMContentLoaded", function() {
    const hash = window.location.hash; // e.g. #mountains-lakes-tab
    if (hash) {
      // Remove active class from all tabs & contents
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

      // Add active to correct tab button
      const targetTab = hash.replace('-tab', ''); // #mountains-lakes-tab → mountains-lakes
      document.querySelector(`.tab-btn[data-tab="${targetTab}"]`)?.classList.add('active');

      // Show correct content
      document.querySelector(hash)?.classList.add('active');

      // Smooth scroll to section
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
// Testimonial Slider
function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    testimonialDots.forEach(dot => dot.classList.remove('active'));
    testimonials[index].classList.add('active');
    testimonialDots[index].classList.add('active');
    currentTestimonial = index;
}

testimonialNext.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

testimonialPrev.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

// Back to Top
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.benefit-card, .destination-card, .testimonial, .gallery-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Newsletter Form Submission (Placeholder)
document.querySelector('.footer-newsletter').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
});
 