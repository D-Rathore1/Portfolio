// Handle scroll-based blur for the landing section
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const landing = document.querySelector('.landing');

  // Calculate blur amount (max 10)
  const blurAmount = Math.min(scrollPosition / 200, 10);

  landing.style.background = "url('images/bg.jpg') no-repeat center center fixed";
  landing.style.backgroundSize = "cover";
  landing.style.filter = `blur(${blurAmount}px)`; // ✅ Use template literal
});

// Blur content section on scroll
window.addEventListener('scroll', function () {
  const content = document.querySelector('.content');
  if (window.scrollY > window.innerHeight / 2) {
    content.classList.add('blurred');
  } else {
    content.classList.remove('blurred');
  }
});

// Modal logic
const modal = document.getElementById('myModal');

// Open modal
function openModal() {
  modal.style.display = "block";
}

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
