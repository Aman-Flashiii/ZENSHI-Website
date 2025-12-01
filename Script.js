document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

   // menu logic for menu.html
const showMoreButtons = document.querySelectorAll('.show-more-btn');

showMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menuCategory = button.closest('.menu-category');
        const hiddenItems = menuCategory ? menuCategory.querySelector('.hidden-menu-items') : null;

        if (!hiddenItems) return;

        // Toggle expanded class
        const isNowExpanded = hiddenItems.classList.toggle('expanded');

        // Update button text
        button.textContent = isNowExpanded ? 'Show Less' : 'Show More';


        setTimeout(() => {
           
            menuCategory.scrollIntoView({ behavior: 'smooth', block: 'start' });

          
        }, 80);
    });
});


    // 'Reserve Your Table' button smooth scroll on index.html
    const ctaButton = document.querySelector('.hero-content .cta-button');
    const reservationSection = document.getElementById('reservation');

    if (ctaButton && reservationSection) {
       
        ctaButton.addEventListener('click', (event) => {
            event.preventDefault();
            
            
            reservationSection.scrollIntoView({
                behavior: 'smooth'
            });

            
            setTimeout(() => {
                const firstInput = reservationSection.querySelector('input');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 600);
        });
    }
});