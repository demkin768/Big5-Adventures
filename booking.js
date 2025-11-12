// booking.js
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  // You can add real-time validation here if needed

  // Simulate form submission
  document.getElementById("form-success").style.display = "block";

  // Reset form fields
  this.reset();
});
