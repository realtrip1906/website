const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('change', function () {
    if (this.checked) {
        navLinks.classList.add('active');
    } else {
        navLinks.classList.remove('active');
    }
});
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', () => {
    burger.checked = false;
    navLinks.classList.remove('active');
}));

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


const count = document.querySelectorAll('.count');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {


            
            count.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 200;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 30);
                } else {
                    count.innerText = target;
                }
            };
            updateCount();
        });

        } else {
            count.forEach(counter => counter.innerText = 0);
        }
    });
    
});

count.forEach(c => {
        observer2.observe(c);
    });


