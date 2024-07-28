document.querySelector('.box-services').addEventListener('click', () => {
    window.location.href = 'https://codepen.io/nightfury10/pen/MWMbGov';
});

document.querySelector('.box-products').addEventListener('click', () => {
    window.location.href = 'https://bezondhiedpvtltd.wordpress.com/';
});

document.querySelector('.box-innovation').addEventListener('click', () => {
    window.location.href = 'https://bezondhiedpvtltd.wordpress.com/';
});

document.querySelector('.box-hiring').addEventListener('click', () => {
    window.location.href = 'https://codepen.io/nightfury10/pen/GRbNdmV';
});

document.querySelector('.box-getintouch').addEventListener('click', () => {
    window.location.href = 'https://codepen.io/nightfury10/pen/dyBOeWw';
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slideshow img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);
showSlide(currentIndex);