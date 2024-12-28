
// Add scroll event listener to change navbar style
const navbar = document.getElementById("navbar");
const menuButtonOpen = document.getElementById("menu-button-open");
const menuButtonClose = document.getElementById("menu-button-close");
const navLink = document.getElementById("nav-link");
const loginButton = document.getElementById("login-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.remove("bg-gray-600/10");
        navbar.classList.add("bg-gray-600/75");
    } else {
        navbar.classList.remove("bg-gray-600/75");
        navbar.classList.add("bg-gray-600/10");
    }
});

function menuOpenFunction(e) {
    menuButtonOpen.classList.add("hidden");
    menuButtonClose.classList.remove("hidden")
    menuButtonClose.classList.add("block");
    loginButton.classList.remove("hidden");
    loginButton.classList.add("block");
    navLink.classList.remove("hidden");

}
function menuCloseFunction(e) {
    menuButtonOpen.classList.remove("hidden");
    menuButtonOpen.classList.add("block");
    menuButtonClose.classList.add("hidden");
    navLink.classList.add("hidden");
    loginButton.classList.add("hidden");
    loginButton.classList.remove("block");

}