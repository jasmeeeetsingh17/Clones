document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
