document.addEventListener("DOMContentLoaded", (event) => {
    var navbar_collapse = document.querySelector("nav .navbar-collapse");
    var nav_link = document.querySelector("nav .navbar-collapse .nav-link");
    var menu_toggler = document.querySelector("nav .menu-toggler");
    var overlay = document.querySelector("nav .overlay");

    // MENU TOGGLER CLICK EVENT
    menu_toggler.addEventListener("click", (e) => {
        e.preventDefault();
        menu_toggler.classList.toggle("open-menu");
        overlay.classList.toggle("open-menu");
        navbar_collapse.classList.toggle("open-menu");
    });

    // NAV LINK CLICK EVENT
    nav_link.addEventListener("click", (e) => {
        e.preventDefault();
        menu_toggler.classList.toggle("open-menu");
        overlay.classList.toggle("open-menu");
        navbar_collapse.classList.toggle("open-menu");
    });

    // OVERLAY CLICK EVENT
    overlay.addEventListener("click", (e) => {
        e.preventDefault();
        overlay.classList.toggle("open-menu");
        menu_toggler.classList.toggle("open-menu");
        navbar_collapse.classList.toggle("open-menu");
    });
});