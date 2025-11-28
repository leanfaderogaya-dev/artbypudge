// Get form and success message elements
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Form submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent actual form submission

  // Check if form is valid
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  // Show success message
  successMessage.style.display = 'block';

  // Clear form
  form.reset();
  form.classList.remove('was-validated');
});
