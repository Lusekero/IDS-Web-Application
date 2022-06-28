document.addEventListener("DOMContentLoaded", function(event) {
    var menu_toggler = document.querySelector("main .menu-toggler");
    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector("#admin .overlay");
    var toggle_sidebar = document.querySelectorAll(".toggle-sidebar");
    var content_wrapper = document.querySelector("main.content-wrapper");

    // MENU TOGGLER CLICK EVENT
    menu_toggler.addEventListener("click", (e) => {
        e.preventDefault();
        const desktop_device = window.matchMedia('(min-width: 992px)');
        const mobile_device = window.matchMedia('(max-width: 991.98px)');

        if (desktop_device.matches) {
            menu_toggler.classList.toggle("open-sidebar");
            content_wrapper.classList.toggle("open-sidebar");
        }
        sidebar.classList.toggle("open-sidebar");
        if (mobile_device.matches) {
            overlay.classList.toggle("open-sidebar");
        }
    });

    // CLOSE SIDEBAR
    toggle_sidebar.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            sidebar.classList.toggle("open-sidebar");
            overlay.classList.toggle("open-sidebar");
        });
    });

    // Open and Hide Sidebar Dropdowns
    document.querySelectorAll('#drop-down .accordion').forEach((menu) => {
        menu.addEventListener("click", (e) => {
            e.preventDefault();
            //Selected Menu First Child
            var accordionItem = menu.firstElementChild;
            // Selected Menu Collapse
            var menuCollapse = accordionItem.querySelector(".accordion-collapse");
            /*
             * On open Clicked Menu:
             * Check if the Menu doesn't have class - opened
             * if true, add the class - opened
             * ----------------------
             * On close Clicked Menu:
             * Check if the Menu has class - opened and if its corresponding Collapse is hidden
             * if true, remove class -opened
             * */
            if (!accordionItem.classList.contains("opened")) {
                accordionItem.classList.add("opened");
            } else if (accordionItem.classList.contains("opened") && !(menuCollapse.classList.contains("show"))) {
                accordionItem.classList.remove("opened");
            }

            // CLOSING PARALLEL ACCORDIONS
            var parallel_collapse = document.querySelector("#drop-down .accordion-collapse.show");

            if ((parallel_collapse != null) && (parallel_collapse.id != menuCollapse.id)) {
                parallel_collapse.classList.toggle("show");
                parallel_collapse.parentElement.classList.remove("opened");
            }

            document.querySelectorAll("#drop-down .collapse:not(.show)").forEach((collapse) => {
                var parentFirstChild = collapse.parentElement.firstChild;

                if (!parentFirstChild.firstChild.classList.contains("collapsed")) {
                    parentFirstChild.firstChild.classList.add("collapsed");
                }
            });
        });
    });

    /*
     * Accordion Menu link reaction on
     * typed URL on the browser
     */
    /*const accordionMenuObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                alert("class was modified!");
            }
        });
    });

    document.querySelectorAll('#drop-down .accordion-menu-link').forEach((accordionMenu) => {
        accordionMenuObserver.observe(accordionMenu, { attributes: true })
    });*/
});