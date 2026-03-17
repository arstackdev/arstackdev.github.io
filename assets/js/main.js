/* ----- STICKY HEADER ----- */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
});


/* ----- MENU TOGGLE ----- */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.addEventListener("click", function (event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnMenuBtn = menuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnMenuBtn) {
        nav.classList.remove("active");
    }
});


/* ----- MULTI-TEXT TYPING EFFECT ----- */

var typingEffect = new Typed(".multiText", {
    strings: ["Programmer", "Freelancer", "UI/UX Designer", "Full-Stack Developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 500,
    backDelay: 1000
});

const track = document.querySelector(".marquee-track");
track.innerHTML += track.innerHTML;