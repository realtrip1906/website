const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('change', function () {
    if (this.checked) {
        navLinks.classList.add('active');
    } else {
        navLinks.classList.remove('active');
    }
});