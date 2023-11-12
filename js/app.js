const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function calculateAspectRatio() {
    const images = document.querySelectorAll('.gallery-img img');
    const aspectRatio = images[0].naturalHeight / images[0].naturalWidth;
  
    images.forEach(img => {
      img.parentElement.style.paddingBottom = containerHeight;
    });
}
  
  window.onload = calculateAspectRatio;
  