window.onload = function () {
    const carouselsLeft = document.querySelectorAll(".carouselLeft") || [];
    const carouselsRight = document.querySelectorAll(".carouselRight") || [];

    carouselsLeft.forEach((carousel) => {
        setupCarousel(carousel);
    });
    carouselsRight.forEach((carousel) => {
        setupCarousel(carousel);
    });

    function setupCarousel(carousel) {
        const track = carousel.querySelector('.carousel_track');
        const slides = Array.from(track.children);
        var nextButton = carousel.querySelector('.carouselLeft_button-right');
        if(nextButton == null) nextButton = carousel.querySelector('.carouselRight_button-right');
        var prevButton = carousel.querySelector('.carouselLeft_button-left');
        if(prevButton == null) prevButton = carousel.querySelector('.carouselRight_button-left');
        const dotsNav = carousel.querySelector('.carousel_nav');
        const dots = Array.from(dotsNav.children);
        const slideWidth = slides[0].getBoundingClientRect().width;

        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);

        const moveToSlide = (track, currentSlide, targetSlide) => {
            if (targetSlide == null) return;
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }

        const updateDots = (currentDot, targetDot) => {
            if (targetDot == null) return;
            currentDot.classList.remove('current-slide');
            targetDot.classList.add('current-slide');
        }

        const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
            if (targetIndex == 0) {
                prevButton.classList.add('is-hidden');
                nextButton.classList.remove('is-hidden');
            }
            else if (targetIndex == slides.length - 1) {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.add('is-hidden');
            }
            else {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.remove('is-hidden');
            }
        }

        // When I click left, move slides to the left
        prevButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const prevDot = currentDot.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide == prevSlide);

            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
            hideShowArrows(slides, prevButton, nextButton, prevIndex);
        });

        // when I click right, move slides to the right
        nextButton.addEventListener('click', e => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const nextDot = currentDot.nextElementSibling;
            const nextIndex = slides.findIndex(slide => slide == nextSlide);

            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
            hideShowArrows(slides, prevButton, nextButton, nextIndex);
        });

        // When I click the nav indicators, move to that slide
        dotsNav.addEventListener('click', e => {
            // What indicator was clicked at
            const targetDot = e.target.closest('button');

            if (!targetDot) return;

            const currentSlide = track.querySelector('.current-slide');
            const currentDot = dotsNav.querySelector('.current-slide');
            const targetIndex = dots.findIndex(dot => dot == targetDot);
            const targetSlide = slides[targetIndex];

            moveToSlide(track, currentSlide, targetSlide);
            updateDots(currentDot, targetDot);
            hideShowArrows(slides, prevButton, nextButton, targetIndex);

        });
    }
};
/* const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselLeft_button-right');
const prevButton = document.querySelector('.carousel_button-left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    if(targetSlide == null) return;
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    if(targetDot == null) return;
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex == 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if(targetIndex == slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// When I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide == prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide == nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// When I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // What indicator was clicked at
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot == targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);

}); */
