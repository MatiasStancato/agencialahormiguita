// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const totalSlides = slide.length;

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Cambiar de diapositiva cada 3 segundos
    setInterval(showNextSlide, 3000);
});
