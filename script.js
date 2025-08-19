function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("nav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("nav").style.width = "0%";
}

// Carousel explorations
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
  updateCarousel();
});

updateCarousel();
