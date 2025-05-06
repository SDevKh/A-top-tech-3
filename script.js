document.addEventListener("DOMContentLoaded", () => {
    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider1");
    const slideWidth = slides[0].offsetWidth;

    // Clone slides for seamless looping
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
});
let currentIndex = 0;
  const carousel = document.getElementById('carousel');
  const totalSlides = carousel.children.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  setInterval(nextSlide, 5000);

  document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to A 3 Top Tech";
    const typingEffect = document.getElementById("typing-effect");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (index > 0) {
            typingEffect.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(erase, 100); // Erasing speed
        } else {
            setTimeout(type, 500); // Wait before typing again
        }
    }

    type(); // Start the typing effect
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("show");
        nav.classList.toggle("hidden");
    });
});