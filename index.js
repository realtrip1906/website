const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('change', function () {
    if (this.checked) {
        navLinks.classList.add('active');
    } else {
        navLinks.classList.remove('active');
    }
});
document.getElementById('main').style.display = 'none';
setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}, 3000);



const animate = document.querySelectorAll('.animate');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('doAnimation');
        } else {
            entry.target.classList.remove('doAnimation');
        }
    });
});


animate.forEach(anim => {
    observer1.observe(anim);
});

