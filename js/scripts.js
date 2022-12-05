AOS.init({disable: 'mobile'});

const navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

// data-typed='{"strings": ["Angular", "React", "Vue"]}'
document.querySelectorAll('[data-typed').forEach((el => {
    const options = {
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 1000,
        loop: true,
        ...el.dataset.typed ? JSON.parse(el.dataset.typed) : {}
    }
    new Typed(el, options);
}));

//  data-countup='{"startVal": 0}' data-to="100"
document.querySelectorAll('[data-countup').forEach((el => {
    const to = el.dataset.to ? el.dataset.to : null;
    const options = el.dataset.countup ? JSON.parse(el.dataset.countup) : {};
    const numAnim = new countUp.CountUp(el, to, options);
    numAnim.start()
}));
