const body = document.querySelector("body");
const btnMenu = document.querySelector(".menu-outline");

function toggleMenu(event) {
    event.name == "menu" ? (event.name = "close") : (event.name = "menu");
    body.classList.toggle("menu-nav-active");
}

const navItem = document.querySelectorAll(".nav-item");

navItem.forEach((item) => {
    item.addEventListener("click", (event) => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active");
            event.name == "menu" ? (event.name = "close") : (event.name = "menu");
        }
    });
});
