document.addEventListener("DOMContentLoaded", (event) => {
    var user_profile = document.querySelector(".top-bar .user-profile");
    var btn_scrollTop = document.querySelector(".scroll-top");

    // User Profile Drop Down
    user_profile.addEventListener("click", (e) => {
        e.preventDefault();

        var menu_list = document.querySelector(".drop-down .menu-list");
        var first_child = menu_list.firstElementChild;
        var last_child = menu_list.lastElementChild;

        // Open and Close User Profile Dropdown
        user_profile.classList.toggle("show-dropdown");

        // User profile Dropdown link animations
        if (user_profile.classList.contains("show-dropdown")) {
            first_child.classList.add("animate__fadeInLeft");
            last_child.classList.add("animate__fadeInRight");
        } else {
            first_child.classList.remove("animate__fadeInLeft");
            last_child.classList.remove("animate__fadeInRight");
        }
    });

    /*
     * Floating Button Behavior
     */
    // Scroll-Top Floating Button
    btn_scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Window Scroll Events
    window.addEventListener("scroll", () => {
        var scroll_top = window.pageYOffset || document.documentElement.scrollTop;

        // Floating Buttons
        if (scroll_top >= 400) {
            btn_scrollTop.classList.add("show");
        } else {
            btn_scrollTop.classList.remove("show");
        }
    });
});