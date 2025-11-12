// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to Top button
const topBtn = document.createElement('button');
topBtn.textContent = '↑ Top';
topBtn.id = 'topBtn';
document.body.appendChild(topBtn);

topBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 12px 20px;
  background-color: #3a2e0f;
  color: #f5f1e9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  font-weight: bold;
  z-index: 1001;
`;

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Live form validation
const form = document.querySelector('form');
form?.addEventListener('submit', e => {
  const name = form.querySelector('input[placeholder="Name"]');
  const email = form.querySelector('input[placeholder="Email"]');
  const message = form.querySelector('textarea');

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    e.preventDefault();
    alert('All fields are required.');
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    e.preventDefault();
    alert('Please enter a valid email.');
  }
});

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.destination, .tour').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
