document.addEventListener('DOMContentLoaded', () => {
    
    // Timeline Interaction
    const cards = document.querySelectorAll('.timeline-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Close other cards (optional - accordion style)
            // cards.forEach(c => {
            //     if (c !== card) c.classList.remove('active');
            // });

            // Toggle current card
            card.classList.toggle('active');
        });
    });

    // Smooth Scroll for Hero Button
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation (Fade In)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation style initially
    const animatedElements = document.querySelectorAll('.timeline-card, .hotel-card, .budget-card, .section-title');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Hero Parallax Effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-background');
        if(heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

});
