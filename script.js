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

// Code für Popup auf explorations

// Überprüfen, ob der Benutzer die Seite das erste Mal besucht
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const closeModal = document.getElementById("closeModal");

  //   // Überprüfen, ob ein Eintrag in localStorage existiert
  if (!sessionStorage.getItem("imageShown")) {
    // Modal anzeigen
    modal.style.display = "flex";
    // Setzen, dass das Bild angezeigt wurde
    sessionStorage.setItem("imageShown", "true");
  }

  //   // Modal schließen, wenn das Schließen-Symbol geklickt wird
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  //   // Schließen, wenn man irgendwo außerhalb des Bildes klickt
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
