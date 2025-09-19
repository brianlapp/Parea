// Parea Express JavaScript - Optimized for Fast Take-Out Experience

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
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Express-specific: Emphasize ordering buttons
    const orderButtons = document.querySelectorAll('a[href*="order-online"]');
    orderButtons.forEach(button => {
        // Add pulsing effect for primary order buttons
        if (button.classList.contains('btn-primary') || button.classList.contains('nav-cta')) {
            button.addEventListener('mouseenter', function() {
                this.style.animation = 'pulse 0.6s ease-in-out';
            });
            
            button.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        }
        
        // Track order button clicks
        button.addEventListener('click', function() {
            console.log('Order button clicked:', this.textContent.trim());
            
            // Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'order_button_click', {
                    'button_text': this.textContent.trim(),
                    'location': 'express',
                    'button_type': this.className
                });
            }
        });
    });
    
    // Phone number click tracking - Express specific
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            console.log('Express phone call initiated:', phoneNumber);
            
            // Track phone clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    'phone_number': phoneNumber,
                    'location': 'express'
                });
            }
        });
    });
    
    // Dishes conveyor enhanced scrolling
    const dishesConveyor = document.querySelector('.dishes-conveyor');
    if (dishesConveyor) {
        let isScrolling = false;
        
        // Add scroll snap for better UX
        dishesConveyor.style.scrollSnapType = 'x mandatory';
        
        const dishCards = dishesConveyor.querySelectorAll('.dish-card');
        dishCards.forEach(card => {
            card.style.scrollSnapAlign = 'start';
        });
        
        // Touch/mouse wheel horizontal scrolling
        dishesConveyor.addEventListener('wheel', function(e) {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
            
            e.preventDefault();
            this.scrollLeft += e.deltaY;
        });
        
        // Auto-scroll hint for mobile users
        if (isMobile() && dishCards.length > 2) {
            setTimeout(() => {
                dishesConveyor.scrollLeft = 100;
                setTimeout(() => {
                    dishesConveyor.scrollLeft = 0;
                }, 1000);
            }, 2000);
        }
    }
    
    // Express hours highlighting - REMOVED for cleaner design
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Staggered animations for cards
                if (entry.target.classList.contains('step') || 
                    entry.target.classList.contains('benefit-item')) {
                    const items = entry.target.parentElement.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animationDelay = `${index * 0.1}s`;
                            item.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const animatedSections = document.querySelectorAll('.quick-order, .deals, .express-benefits, .about, .hours, .contact');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe individual items
    const animatedItems = document.querySelectorAll('.dish-card, .step, .benefit-item, .deal-card');
    animatedItems.forEach(item => {
        observer.observe(item);
    });
    
    // Gallery lightbox functionality (same as Orleans but optimized)
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
        
        img.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(this.src, this.alt);
            }
        });
        
        img.setAttribute('tabindex', '0');
    });
    
    function openLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="${alt}">
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        
        // Lightbox styles
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
        
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
        
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
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    }
    
    // Express-specific: Order completion time estimation - REMOVED for cleaner buttons
    
    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
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
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
    
    // Performance monitoring
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Parea Express page loaded in ${Math.round(loadTime)}ms`);
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                'value': Math.round(loadTime),
                'location': 'express'
            });
        }
    });
    
    // Express-specific: Quick order shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + O = Quick order
        if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
            e.preventDefault();
            window.open('https://pareaauthenticgreek.order-online.ai/#/', '_blank');
        }
        
        // Ctrl/Cmd + P = Call phone
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.location.href = 'tel:613-499-1010';
        }
    });
    
    // Utility function to detect mobile
    function isMobile() {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Mobile-specific optimizations
    if (isMobile()) {
        document.body.classList.add('mobile-device');
        
        // Disable hover effects on mobile
        const style = document.createElement('style');
        style.textContent = `
            .mobile-device .dish-card:hover,
            .mobile-device .step:hover,
            .mobile-device .benefit-item:hover {
                transform: none;
            }
        `;
        document.head.appendChild(style);
        
        // Add touch feedback for buttons
        const buttons = document.querySelectorAll('.btn, .btn-small');
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.opacity = '0.8';
            });
            
            button.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
        });
    }
    
    // Console welcome message
    console.log('%c🚀 Welcome to Parea Express! 🚀', 'color: #ea580c; font-size: 16px; font-weight: bold;');
    console.log('Fast Greek take-out on Montreal Road - Open daily 11am-9pm');
    console.log('⚡ Quick service • 📦 Take-out only • 🅿️ Dedicated parking');
    console.log('Keyboard shortcuts: Ctrl+O (Order), Ctrl+P (Call)');
});

// Express utility functions
window.PareaExpress = {
    // Quick order function
    orderNow: function() {
        window.open('https://pareaauthenticgreek.order-online.ai/#/', '_blank');
    },
    
    // Call restaurant
    callExpress: function() {
        window.location.href = 'tel:613-499-1010';
    },
    
    // Get directions
    getDirections: function() {
        window.open('https://www.google.com/maps/dir//540+Montreal+Rd,+Ottawa,+ON+K1K+4R4', '_blank');
    },
    
    // Check if open
    isOpen: function() {
        const now = new Date();
        const currentHour = now.getHours();
        return currentHour >= 11 && currentHour < 21;
    },
    
    // Get estimated wait time
    getEstimatedWaitTime: function() {
        if (!this.isOpen()) return 'Closed';
        
        const now = new Date();
        const currentHour = now.getHours();
        
        if (currentHour >= 12 && currentHour <= 13) return '15-20 minutes';
        if (currentHour >= 17 && currentHour <= 19) return '20-25 minutes';
        return '10-15 minutes';
    }
};
