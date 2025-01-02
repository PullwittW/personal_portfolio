function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// function openTabDesctop(evt, tabName) {
//   if (window.innerWidth >= 615) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("gallery");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablink");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//         tablinks[i].style.textDecoration = "none"
//     }
//     document.getElementById(tabName).style.display = "grid";

//     evt.currentTarget.className += " active";
//     evt.currentTarget.style.textDecoration = "underline"
//   }
// }

// Carousel explorations
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
 
function updateCarousel() {
  items.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

updateCarousel();

// Open images in full screen
document.addEventListener('DOMContentLoaded', function() {
  const galleries = document.querySelectorAll('.gallery');
  const overlay = document.getElementById('fullscreen-overlay');
  const fullscreenImage = document.getElementById('fullscreen-image');
  const closeBtn = document.querySelector('.close-btn');

  galleries.forEach(gallery => {
    gallery.addEventListener('click', function(e) {
      if (e.target.classList.contains('experience-photos')) {
        overlay.style.display = 'block';
        fullscreenImage.src = e.target.src;
        fullscreenImage.alt = e.target.alt;
      }
    });
  });

  closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});

// Automatisches Resizing der Koordinaten der Image-Map
document.addEventListener("DOMContentLoaded", function() {
  imageMapResize();
});