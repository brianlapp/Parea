// Parea Splash Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Location card click handlers
    const locationCards = document.querySelectorAll('.location-card');
    
    locationCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on buttons or links
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            const location = this.getAttribute('data-location');
            if (location) {
                window.location.href = `${location}/`;
            }
        });
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const location = this.getAttribute('data-location');
                if (location) {
                    window.location.href = `${location}/`;
                }
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });
    
    // Smooth scroll for any anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading states to external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add a subtle loading indication
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 1000);
        });
    });
    
    // Phone number click tracking (optional analytics)
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            console.log('Phone call initiated:', phoneNumber);
            
            // Here you could add analytics tracking if needed
            // Example: gtag('event', 'phone_call', { phone_number: phoneNumber });
        });
    });
    
    // Intersection Observer for animation triggers
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.info-item, .footer');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Handle logo click to reload page
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.reload();
        });
        logo.style.cursor = 'pointer';
    }
    
    // Performance: Lazy load images that are not immediately visible
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Force reload with proper loading
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Add CSS class for loaded images
    const style = document.createElement('style');
    style.textContent = `
        img.loaded {
            opacity: 1;
            transition: opacity 0.3s ease;
        }
        img:not(.loaded) {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Console welcome message
    console.log('%c🇬🇷 Welcome to Parea Authentic Greek! 🇬🇷', 'color: #1e3a8a; font-size: 16px; font-weight: bold;');
    console.log('Choose your location: Orleans for full dining experience, Express for quick take-out!');
});

// Utility function to detect mobile device
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Adjust interactions for mobile devices
if (isMobile()) {
    document.body.classList.add('mobile-device');
    
    // Remove hover effects on mobile
    const style = document.createElement('style');
    style.textContent = `
        .mobile-device .location-card:hover {
            transform: none;
        }
        .mobile-device .location-card:hover .location-image img {
            transform: none;
        }
    `;
    document.head.appendChild(style);
}
