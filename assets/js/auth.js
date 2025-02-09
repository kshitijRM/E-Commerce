const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Add login functionality
document.querySelector('.form-box.login form').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
});

// Add register functionality
document.querySelector('.form-box.register form').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
}); 