const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// arrange slides next to each other 
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide, currentDot, targetDot) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    // currentDot.classList.remove('current-slide');
    // targetDot.classList.add('current-slide');
}
// click left, move slides to the left 
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    // const currentDot = dotsNav.querySelector('.current-slide');
    // const prevDot = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});


// click right, move slides to the right 
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    // const currentDot = dotsNav.querySelector('.current-slide');
    // const nextDot = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
});