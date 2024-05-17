 function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleMenuOpen() {
    document.getElementById("hamburger-nav").style.display = "block";
}

function toggleMenuClose() {
    document.getElementById("hamburger-nav").style.display = "none";
}