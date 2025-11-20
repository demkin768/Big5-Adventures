let selectedPackage = null;

    function setPackage(price, name, button) {
      const vanButton = document.getElementById("vanButton");
      const cruiserButton = document.getElementById("cruiserButton");

      if (selectedPackage === name) {
        // Deselect if the same button is clicked again
        document.getElementById("pricePerPerson").value = "";
        document.getElementById("packageType").value = "";
        document.getElementById("bookingTitle").innerText = "Book Your Safari";
        vanButton.disabled = false;
        cruiserButton.disabled = false;
        vanButton.classList.remove("selected");
        cruiserButton.classList.remove("selected");
        selectedPackage = null;
      } else {
        // Select new package
        document.getElementById("pricePerPerson").value = price;
        document.getElementById("packageType").value = name;
        document.getElementById("bookingTitle").innerText = name;
        vanButton.disabled = (name === "Cruiser Package");
        cruiserButton.disabled = (name === "Van Package");
        vanButton.classList.toggle("selected", name === "Van Package");
        cruiserButton.classList.toggle("selected", name === "Cruiser Package");
        selectedPackage = name;
      }
      calculateTotal();
      validateForm();
    }

    function calculateTotal() {
      const people = parseInt(document.getElementById("people").value) || 0;
      const pricePerPerson = parseInt(document.getElementById("pricePerPerson").value) || 0;

      const total = people * pricePerPerson;
      document.getElementById("totalPrice").innerText = `Total: KSh ${total.toLocaleString()}`;
    }

    function validateForm() {
      const people = parseInt(document.getElementById("people").value) || 0;
      const startDate = new Date(document.getElementById("startDate").value);
      const endDate = new Date(document.getElementById("endDate").value);
      const pricePerPerson = document.getElementById("pricePerPerson").value;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const submitBtn = document.querySelector("#bookingForm .btn");
      let errorMessage = "";

      if (!pricePerPerson) errorMessage = "Please select a package (Van or Cruiser).";
      else if (people < 1) errorMessage = "Number of people must be at least 1.";
      else if (people > (pricePerPerson == 21000 ? 8 : 6)) errorMessage = `Max people for this package is ${pricePerPerson == 21000 ? 8 : 6}.`;
      else if (!startDate || !endDate || endDate < startDate) errorMessage = "End date must be after start date.";
      else if (!name) errorMessage = "Please enter your name.";
      else if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errorMessage = "Please enter a valid email.";
      else if (!phone || !/^\+?\d{10,12}$/.test(phone)) errorMessage = "Please enter a valid phone number.";

      document.getElementById("formError").innerText = errorMessage;
      submitBtn.disabled = !!errorMessage;
    }

    document.querySelectorAll("#people").forEach(el => {
      el.addEventListener("input", calculateTotal);
    });

    document.querySelectorAll("#bookingForm input").forEach(el => {
      el.addEventListener("input", validateForm);
    });

    document.getElementById("bookingForm").addEventListener("submit", async function(e) {
      e.preventDefault();
      validateForm();
      if (!document.getElementById("formError").innerText) {
        const formData = {
          package: document.getElementById("packageType").value,
          people: document.getElementById("people").value,
          startDate: document.getElementById("startDate").value,
          endDate: document.getElementById("endDate").value,
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          total: document.getElementById("totalPrice").innerText.replace("Total: KSh ", "").replace(",", "")
        };
        try {
          // Simulate backend call; replace with actual fetch to your API
          console.log("Form data:", formData);
          alert("Your booking has been received! We will contact you shortly.");
          // For real payment, uncomment and adjust:
          // const response = await fetch("/api/book", {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify(formData)
          // });
          // const result = await response.json();
          // if (result.paymentUrl) window.location.href = result.paymentUrl;
        } catch (error) {
          alert("Error submitting booking. Please try again.");
        }
      }
    });

    // Gallery Slideshow
    const gallery = document.querySelector('.camp-gallery');
    const galleryImages = document.querySelectorAll('.camp-gallery img');
    const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');
    let currentImageIndex = 0;
    let slideshowInterval;

    function showImage(index) {
      gallery.style.transform = `translateX(-${index * 100}%)`;
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      thumbnails[index].classList.add('active');
      currentImageIndex = index;
    }

    function startSlideshow() {
      slideshowInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(currentImageIndex);
      }, 5000);
    }

    function stopSlideshow() {
      clearInterval(slideshowInterval);
    }

    prevSlide.addEventListener('click', () => {
      stopSlideshow();
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentImageIndex);
      startSlideshow();
    });

    nextSlide.addEventListener('click', () => {
      stopSlideshow();
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      showImage(currentImageIndex);
      startSlideshow();
    });

    prevSlide.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') prevSlide.click();
    });

    nextSlide.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') nextSlide.click();
    });

    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        stopSlideshow();
        showImage(index);
        startSlideshow();
      });
    });
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_TRACKING_ID');
    // Touch support for gallery
    let touchStartX = 0;
    gallery.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    });
    gallery.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchEndX < touchStartX - 50) nextSlide.click();
      if (touchEndX > touchStartX + 50) prevSlide.click();
    });

    startSlideshow();

    // Pre-select van package on page load
    window.onload = function() {
      setPackage(21000, 'Van Package', document.getElementById("vanButton"));
    };