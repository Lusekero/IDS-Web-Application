document.addEventListener("DOMContentLoaded", (event) => {
    var btn_scrollTop = document.querySelector(".scroll-top");
    var navbar = document.querySelector(".navbar");

    // Scroll-Top Floating Button
    btn_scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Window Scroll Events
    window.addEventListener("scroll", () => {
        var scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        var btn_whatsApp = document.querySelector(".whatsapp");

        // On Scroll Fixed Navbar
        if (scroll_top >= 200) {
            navbar.classList.add("sticky-nav");
        } else {
            navbar.classList.remove("sticky-nav");
        }

        // Floating Buttons
        if (scroll_top >= 1000) {
            btn_whatsApp.classList.add("move-up");
            btn_scrollTop.classList.add("show");
        } else {
            btn_scrollTop.classList.remove("show");
            btn_whatsApp.classList.remove("move-up");
        }
    });
});