function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function openTabDesctop(evt, tabName) {
  if (window.innerWidth >= 615) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("gallery");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
  }
}

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