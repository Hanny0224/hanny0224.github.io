// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the navbar and content elements
    const navbar = document.querySelector('.navbar');
    const banner = document.querySelector('.Banner');

    // Check if navbar exists before proceeding
    if (navbar) {
        // Set the top position of the banner relative to the bottom of the navbar
        banner.style.top = navbar.offsetHeight + 'px';

        // Re-calculate the top position of the banner when the window is resized
        window.addEventListener('resize', function() {
            banner.style.top = navbar.offsetHeight + 'px';
        });
    } else {
        console.error("Navbar element not found.");
    }
});

