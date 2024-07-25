document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menutoggle');
    const navlist = document.getElementById('navlist');

    if (menuToggle && navlist) {
        menuToggle.addEventListener('click', function() {
            navlist.classList.toggle('active');
        });
    } else {
        console.error("Menu toggle or navlist element not found.");
    }
});

