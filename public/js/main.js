document.addEventListener('DOMContentLoaded', function () {
    // Login Form Validation
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        const username = document.querySelector('#loginUsername').value;
        const password = document.querySelector('#loginPassword').value;
        
        if (!username || !password) {
          alert('Please fill in both fields');
          event.preventDefault(); // Prevent form submission
        }
      });
    }
  
    // Registration Form Validation
    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', function (event) {
        const username = document.querySelector('#registerUsername').value;
        const password = document.querySelector('#registerPassword').value;
        const confirmPassword = document.querySelector('#confirmPassword').value;
  
        if (!username || !password || !confirmPassword) {
          alert('Please fill in all fields');
          event.preventDefault();
        } else if (password !== confirmPassword) {
          alert('Passwords do not match');
          event.preventDefault();
        }
      });
    }
  });
  