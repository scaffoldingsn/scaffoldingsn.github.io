window.addEventListener("DOMContentLoaded", e => {
    var a = function() {
        let e = document.body.querySelector("#mainNav");
        e && (0 === window.scrollY ? e.classList.remove("navbar-shrink") : e.classList.add("navbar-shrink"))
    };
    a(), document.addEventListener("scroll", a);
    let n = document.body.querySelector("#mainNav");
    n && new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        rootMargin: "0px 0px -40%"
    });
    let l = document.body.querySelector(".navbar-toggler"),
        r = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
    r.map(function(e) {
        e.addEventListener("click", () => {
            "none" !== window.getComputedStyle(l).display && l.click()
        })
    })
});