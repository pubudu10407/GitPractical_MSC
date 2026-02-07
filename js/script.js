// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Command card click handler with animation
document.querySelectorAll('.command-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add a pulse animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 0.5s';
        }, 10);
        
        // Copy command to clipboard
        const code = this.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            // Show feedback
            const originalBg = this.style.backgroundColor;
            this.style.backgroundColor = '#e8f5e9';
            setTimeout(() => {
                this.style.backgroundColor = originalBg;
            }, 300);
            
            console.log('Command copied to clipboard: ' + code);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Animate statistics counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.ceil(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(start);
        }
    }, 16);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate counters when stats section is visible
            animateCounter(document.getElementById('repos-count'), 100, 2000);
            animateCounter(document.getElementById('developers-count'), 73, 2000);
            animateCounter(document.getElementById('commits-count'), 2, 2000);
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add animation to command cards on scroll
const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.animation = 'fadeInUp 0.6s forwards';
            }, index * 100);
            
            cardsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe all command cards
document.querySelectorAll('.command-card').forEach(card => {
    cardsObserver.observe(card);
});

// Add animation to workflow steps
const stepsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'scale(0.8)';
                entry.target.style.animation = 'scaleIn 0.5s forwards';
            }, index * 150);
            
            stepsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

// Add scale animation
const scaleStyle = document.createElement('style');
scaleStyle.textContent = `
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(scaleStyle);

// Observe workflow steps
document.querySelectorAll('.step').forEach(step => {
    stepsObserver.observe(step);
});

// Add interactive tooltip for commands
document.querySelectorAll('.command-card').forEach(card => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = 'Click to copy';
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.8rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
    `;
    
    card.style.position = 'relative';
    card.appendChild(tooltip);
    
    card.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});

// Log page load
console.log('Git Basics website loaded successfully!');
console.log('Features: Smooth scrolling, animated counters, interactive command cards');
