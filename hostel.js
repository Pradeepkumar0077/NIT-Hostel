// Hostel Management System - Main JavaScript File
// This file contains shared functionality for the website

// Utility Functions
function showAlert(message, type = 'success') {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  document.body.insertBefore(alert, document.body.firstChild);

  setTimeout(() => {
    alert.remove();
  }, 5000);
}

// Form Validation
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePhoneNumber(phone) {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
}

// Session Management
function getCurrentUser() {
  return localStorage.getItem("username");
}

function isUserLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  localStorage.removeItem("loginTime");
  window.location.href = "index.html";
}

// Initialize Bootstrap with form validation (if needed on page)
(() => {
  'use strict';
  window.addEventListener('load', () => {
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  });
})();