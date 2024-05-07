const toggleButton = document.getElementById('navbar-toggle');
const navLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});