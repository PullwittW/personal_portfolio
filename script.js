function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

let slideIndexBar = 1;
showSlides(slideIndexBar);

// Next/previous controls
function plusSlidesBar(n) {
  showSlides(slideIndexBar += n);
}

// Thumbnail image controls
function currentSlideBar(n) {
  showSlidesBar(slideIndexBar = n);
}

function showSlidesBar(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesBar");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexBar = 1}
  if (n < 1) {slideIndexBar = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function openTabDesctop(evt, tabName) {
  if (window.innerWidth >= 615) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("gallery");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinkDesc");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
  }
}