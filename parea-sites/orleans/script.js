// Parea Orleans Restaurant JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Dishes conveyor scroll functionality
    const dishesConveyor = document.querySelector('.dishes-conveyor');
    if (dishesConveyor) {
        let isScrolling = false;
        
        // Add scroll indicators if needed
        function updateScrollIndicators() {
            const scrollLeft = dishesConveyor.scrollLeft;
            const maxScroll = dishesConveyor.scrollWidth - dishesConveyor.clientWidth;
            
            // You could add left/right arrow buttons here
            // This is a placeholder for future enhancement
        }
        
        dishesConveyor.addEventListener('scroll', function() {
            if (!isScrolling) {
                window.requestAnimationFrame(updateScrollIndicators);
                isScrolling = true;
            }
        });
        
        dishesConveyor.addEventListener('scrollend', function() {
            isScrolling = false;
        });
        
        // Touch/mouse wheel horizontal scrolling
        dishesConveyor.addEventListener('wheel', function(e) {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
            
            e.preventDefault();
            this.scrollLeft += e.deltaY;
        });
    }
    
    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            console.log('Phone call initiated:', phoneNumber);
            
            // Track phone clicks for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    'phone_number': phoneNumber,
                    'location': 'orleans'
                });
            }
        });
    });
    
    // External link tracking
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            const url = this.href;
            console.log('External link clicked:', url);
            
            // Add loading state
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 1000);
            
            // Track external clicks for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'external_link', {
                    'link_url': url,
                    'location': 'orleans'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for cards
                if (entry.target.classList.contains('dish-card') || 
                    entry.target.classList.contains('review-card')) {
                    const cards = entry.target.parentElement.children;
                    Array.from(cards).forEach((card, index) => {
                        setTimeout(() => {
                            card.style.animationDelay = `${index * 0.1}s`;
                            card.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const animatedSections = document.querySelectorAll('.deals, .custom-messaging, .reservations, .catering, .reviews, .gallery, .about, .hours, .contact');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe individual cards
    const animatedCards = document.querySelectorAll('.dish-card, .deal-card, .review-card, .message-item');
    animatedCards.forEach(card => {
        observer.observe(card);
    });
    
    // Hours highlighting (show current day)
    function highlightCurrentDay() {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const today = new Date().getDay();
        const todayName = days[today];
        
        const hoursDays = document.querySelectorAll('.hours-day');
        hoursDays.forEach((dayElement, index) => {
            const dayText = dayElement.querySelector('.day').textContent.toLowerCase();
            if (dayText.includes(todayName)) {
                dayElement.classList.add('current-day');
                dayElement.style.backgroundColor = 'var(--primary-light)';
                dayElement.style.color = 'var(--white)';
                dayElement.style.borderRadius = '8px';
                dayElement.style.fontWeight = '600';
            }
        });
    }
    
    highlightCurrentDay();
    
    // Gallery lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
        
        // Add keyboard support
        img.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(this.src, this.alt);
            }
        });
        
        // Make images focusable
        img.setAttribute('tabindex', '0');
    });
    
    function openLightbox(src, alt) {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="${alt}">
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        
        // Add lightbox styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const content = lightbox.querySelector('.lightbox-content');
        content.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;
        
        const img = lightbox.querySelector('img');
        img.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 8px;
        `;
        
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0.5rem;
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Animate in
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
        
        // Close functionality
        function closeLightbox() {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(lightbox);
                document.body.style.overflow = '';
            }, 300);
        }
        
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    }
    
    // Form validation (if forms are added later)
    function validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        return isValid;
    }
    
    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
    
    // Performance monitoring
    window.addEventListener('load', function() {
        // Log page load time
        const loadTime = performance.now();
        console.log(`Parea Orleans page loaded in ${Math.round(loadTime)}ms`);
        
        // Track performance if analytics available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                'value': Math.round(loadTime),
                'location': 'orleans'
            });
        }
    });
    
    // Utility function to detect mobile
    function isMobile() {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Adjust interactions for mobile
    if (isMobile()) {
        document.body.classList.add('mobile-device');
        
        // Disable hover effects on mobile
        const style = document.createElement('style');
        style.textContent = `
            .mobile-device .dish-card:hover,
            .mobile-device .deal-card:hover,
            .mobile-device .gallery-item:hover {
                transform: none;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Console welcome message
    console.log('%c🇬🇷 Welcome to Parea Orleans! 🇬🇷', 'color: #1e3a8a; font-size: 16px; font-weight: bold;');
    console.log('Authentic Greek restaurant experience in Orleans, Ottawa');
    console.log('Features: Dine-in • Take-out • Delivery • Reservations • Catering');
});

// Utility functions for potential future use
window.PareaOrleans = {
    // Scroll to section
    scrollToSection: function(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    },
    
    // Open reservation link
    makeReservation: function() {
        window.open('https://www.eatparea.com/en/book-a-table/', '_blank');
    },
    
    // Open online ordering
    orderOnline: function() {
        window.open('https://pareaauthenticgreek.order-online.ai/#/', '_blank');
    },
    
    // Call restaurant
    callRestaurant: function() {
        window.location.href = 'tel:613-834-1112';
    }
};
