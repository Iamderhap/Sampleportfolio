
// ================= MOBILE NAVIGATION =================

// Select the menu button
const menuToggle = document.getElementById("menuToggle");

// Select the navigation menu
const navbar = document.getElementById("navbar");


// Open and close the mobile navigation menu

menuToggle.addEventListener("click", function () {

    // Toggle the active class
    const isOpen = navbar.classList.toggle("active");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close navigation when a link is clicked

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
