/* Loader */

let loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", function() {
    loader.parentElement.removeChild(loader);

});




/* hamburger */
var hamburger = document.querySelector(".hamburger");
var hamburgerList = document.querySelector(".hamburger-list");

hamburger.addEventListener("click", () => {
    hamburgerList.classList.toggle("open");
});

/* ScrollReveal */

ScrollReveal().reveal('.tagline', {
    delay: 300
});