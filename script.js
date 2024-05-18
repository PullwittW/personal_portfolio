 function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleUSA() {
    var usa = document.getElementById("usa");
    if (usa.style.display === "none") {
        usa.style.display = "grid";
    } else {
        usa.style.display = "none";
    } 
}