document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Optional: Close mobile menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Only close if it's an internal link on the same page
                if (link.getAttribute('href').startsWith('#')) {
                    mobileMenu.classList.add('hidden');
                }
                // If linking to a different page (like project-detail.html),
                // the menu will naturally close on page load anyway.
            });
        });
    }

    // --- Smooth Scrolling for Internal Anchors ---
    // Note: `scroll-smooth` class in <html> handles this in modern browsers.
    // Keep this commented out unless you specifically need JS control or broader compatibility.
    // const internalLinks = document.querySelectorAll('a[href^="#"]');
    // internalLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         const targetId = this.getAttribute('href');
    //         // Ensure it's truly an internal link on the current page
    //         if (targetId.startsWith('#') && document.getElementById(targetId.substring(1))) {
    //             e.preventDefault(); // Prevent default anchor jump
    //             const targetElement = document.getElementById(targetId.substring(1));
    //             if (targetElement) {
    //                 targetElement.scrollIntoView({
    //                     behavior: 'smooth',
    //                     block: 'start'
    //                 });
    //             }
    //         }
    //     });
    // });


    // --- Update Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Add more JS functionality as needed ---
    // e.g., Project filtering, interactive map initialization (Leaflet/Mapbox GL JS), etc.

});