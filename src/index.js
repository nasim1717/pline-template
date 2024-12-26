
// Add scroll event listener to change navbar style
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.remove("bg-gray-600/10");
        navbar.classList.add("bg-gray-600/75");
    } else {
        navbar.classList.remove("bg-gray-600/75");
        navbar.classList.add("bg-gray-600/10");
    }
});
