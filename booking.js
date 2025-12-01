// =============== BOOKING SYSTEM - MARA BUDGET CAMP (FIXED) ===============
let selectedPrice = 0;
let selectedPackageName = "";

function setPackage(price, packageName, button) {
  // Update hidden fields
  document.getElementById("pricePerPerson").value = price;
  document.getElementById("packageType").value = packageName;
  document.getElementById("bookingTitle").innerText = packageName;

  // Update selected button appearance (green highlight)
  document.querySelectorAll(".btn-small").forEach(btn => {
    btn.classList.remove("selected");
  });
  button.classList.add("selected");

  // Save current selection
  selectedPrice = price;
  selectedPackageName = packageName;

  calculateTotal();
  validateForm();
}

// ==================== GALLERY AUTO-SLIDESHOW (5 seconds) ====================
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector('.camp-gallery');
  const images = document.querySelectorAll('.camp-gallery img');
  const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');

  let currentIndex = 0;
  let autoSlideInterval;

  // Show specific slide
  function showSlide(index) {
    gallery.style.transform = `translateX(-${index * 100}%)`;
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  // Auto slideshow – 5 seconds
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // 5000ms = 5 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Manual controls
  nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide(); // resume auto-play
  });

  prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  // Thumbnail click
  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      stopAutoSlide();
      showSlide(i);
      startAutoSlide();
    });
  });

  // Touch/swipe support for mobile
  let touchStartX = 0;
  gallery.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
  gallery.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) { nextSlide(); stopAutoSlide(); startAutoSlide(); }
    if (touchEndX - touchStartX > 50) { prevSlide(); stopAutoSlide(); startAutoSlide(); }
  });

  // Start auto-slideshow on page load
  showSlide(0);
  startAutoSlide();

  // Optional: Pause on hover (nice UX)
  document.querySelector('.gallery-container').addEventListener('mouseenter', stopAutoSlide);
  document.querySelector('.gallery-container').addEventListener('mouseleave', startAutoSlide);
});

// Calculate total price
function calculateTotal() {
  const people = parseInt(document.getElementById("people").value) || 0;
  const total = people * selectedPrice;
  document.getElementById("totalPrice").innerText = `Total: KSh ${total.toLocaleString()}`;
}

// Validate form & enable/disable submit button
function validateForm() {
  const people = parseInt(document.getElementById("people").value) || 0;
  const maxPeople = selectedPrice === 21000 ? 8 : 6;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  let error = "";

  if (selectedPrice === 0) error = "Please select Van or Cruiser package.";
  else if (people < 1) error = "At least 1 person required.";
  else if (people > maxPeople) error = `Maximum ${maxPeople} people for this package.`;
  else if (!startDate || !endDate || endDate < startDate) error = "Valid dates required.";
  else if (!name || !email || !phone) error = "All contact details required.";

  document.getElementById("formError").innerText = error;
  document.querySelector("#bookingForm .btn").disabled = !!error;
}

// Event Listeners
document.getElementById("people").addEventListener("input", () => {
  calculateTotal();
  validateForm();
});

document.querySelectorAll("#bookingForm input").forEach(input => {
  input.addEventListener("input", validateForm);
});

// Form Submit (just shows success for now)
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  if (!document.querySelector("#bookingForm .btn").disabled) {
    alert("Booking received! 🎉 We will contact you on WhatsApp/email within minutes.");
    // Here you can later add EmailJS, WhatsApp redirect, etc.
  }
});

// Your gallery code remains 100% unchanged below this line...
// (Keep all your existing gallery slideshow code exactly as it was)