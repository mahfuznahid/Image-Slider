let currentIndex = 0;
const totalImages = 10;
const slideWidthPercent = 10; // Each image is 10% wide
const visibleImages = 1;

const slides = document.querySelector(".slides");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function updateSlider() {
  // Clamp index to valid range
  currentIndex = Math.max(
    0,
    Math.min(currentIndex, totalImages - visibleImages)
  );

  slides.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`;

  prevButton.style.display = currentIndex === 0 ? "none" : "block";
  nextButton.style.display =
    currentIndex >= totalImages - visibleImages ? "none" : "block";
}

// Manual controls
prevButton.addEventListener("click", () => {
  currentIndex--;
  updateSlider();
  resetAutoSlide();
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  updateSlider();
  resetAutoSlide();
});

// Auto-slide setup
let autoSlideInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}, 3000); // Change every 3 seconds

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
  }, 3000);
}

// Initialize
updateSlider();
