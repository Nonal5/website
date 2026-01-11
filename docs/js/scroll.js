document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const topOffset = targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: topOffset - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Alternative smooth scroll pour tous les navigateurs
if (!window.CSS || !CSS.supports('scroll-behavior', 'smooth')) {
    document.documentElement.style.scrollBehavior = 'auto';
}