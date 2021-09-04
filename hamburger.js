const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const html = document.querySelector("html");

hamburger.addEventListener("click", mobileMenu)
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
    html.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    html.classList.remove("active");
}


// This is to try and avoid the system navigation bar at the bottom of mobile devices from covering some content in 100vh hero

window.onresize = function() {
    document.body.height =window.innerHeight;
}

window.onresize();


