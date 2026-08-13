document.addEventListener('DOMContentLoaded', async () => {
    
    // 1. Initialize Animate On Scroll (AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // 2. Function to Load Header and Footer Dynamically
    async function loadComponents() {
        try {
            const headerRes = await fetch('header.html');
            const headerHtml = await headerRes.text();
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) headerPlaceholder.innerHTML = headerHtml;

            const footerRes = await fetch('footer.html');
            const footerHtml = await footerRes.text();
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) footerPlaceholder.innerHTML = footerHtml;

            // Initialize scripts after injection
            initHeaderScripts();
            initThemeToggle(); // Ensures the button works after being loaded
            
        } catch (error) {
            console.error("Error loading components:", error);
        }
    }

    // 3. Logic for Theme Toggle (Dark/Light Mode)
    function initThemeToggle() {
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        
        if (!themeToggleBtn || !themeIcon) return;

        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);

        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'dark') {
                // Sun Icon for Dark Mode
                themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
            } else {
                // Moon Icon for Light Mode
                themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
            }
        }
    }

    // 4. Logic for Mobile Menu and Sticky Header
    function initHeaderScripts() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }

        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Sticky Header Transition
        const header = document.querySelector('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }

    // 5. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const inputs = contactForm.querySelectorAll('.form-control');

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    input.style.borderColor = 'red';
                } else {
                    input.classList.remove('error');
                    input.style.borderColor = 'var(--border-color)';
                }
            });

            const emailInput = document.getElementById('email');
            if (emailInput && emailInput.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    isValid = false;
                    emailInput.classList.add('error');
                    emailInput.style.borderColor = 'red';
                }
            }

            if (isValid) {
                const successMsg = document.getElementById('formSuccess');
                if (successMsg) {
                    successMsg.style.display = 'block';
                    successMsg.style.color = 'green';
                    successMsg.style.marginBottom = '1rem';
                }
                contactForm.reset();
                setTimeout(() => {
                    if(successMsg) successMsg.style.display = 'none';
                }, 5000);
            }
        });
    }

    // Execute the component loader
    await loadComponents();
});

// --- Back to Top Button Logic ---
const backToTopBtn = document.getElementById("backToTop");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        // Show button if scrolled down past 400px
        if (window.scrollY > 400) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Scroll smoothly to top on click
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// --- Custom Cursor Logic ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows exactly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with a slight trailing delay
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Add hover effect for interactive elements
document.querySelectorAll('a, button, input, .card').forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('cursor-hover'));
});

// --- Terminal Loader Logic ---
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('terminal-loader');
    
    if (loader) {
        // Wait 2.5 seconds for the typing animation to finish
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transform = 'translateY(-100%)'; // Slides up like a terminal blind
            
            // Remove from DOM after transition finishes
            setTimeout(() => {
                loader.remove();
                document.body.classList.add('fade-in'); // Triggers your existing page fade
            }, 800);
        }, 2500); 
    }
});