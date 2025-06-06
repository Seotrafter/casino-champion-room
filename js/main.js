

document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarCollapse");

    toggler.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
        });
    });
});
