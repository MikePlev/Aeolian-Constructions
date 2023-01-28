let slideIndex = [1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;   
  }
      
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  

  //moveToSlide(track, currentSlide, prevSlide);
  //updateDots(currentDot, prevDot);

}

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


// window.onload = function () {
//     const carouselsLeft = document.querySelectorAll(".carouselLeft") || [];
//     const carouselsRight = document.querySelectorAll(".carouselRight") || [];

//     carouselsLeft.forEach((carousel) => {
//         setupCarousel(carousel);
//     });
//     carouselsRight.forEach((carousel) => {
//         setupCarousel(carousel);
//     });

//     function setupCarousel(carousel) {
//         const track = carousel.querySelector('.carousel_track');
//         const slides = Array.from(track.children);
//         var nextButton = carousel.querySelector('.carouselLeft_button-right');
//         if(nextButton == null) nextButton = carousel.querySelector('.carouselRight_button-right');
//         var prevButton = carousel.querySelector('.carouselLeft_button-left');
//         if(prevButton == null) prevButton = carousel.querySelector('.carouselRight_button-left');
//         const dotsNav = carousel.querySelector('.carousel_nav');
//         const dots = Array.from(dotsNav.children);
//         const slideWidth = slides[0].getBoundingClientRect().width;

//         const setSlidePosition = (slide, index) => {
//             slide.style.left = slideWidth * index + 'px';
//         };
//         slides.forEach(setSlidePosition);

//         const moveToSlide = (track, currentSlide, targetSlide) => {
//             if (targetSlide == null) return;
//             track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//             currentSlide.classList.remove('current-slide');
//             targetSlide.classList.add('current-slide');
//         }

//         const updateDots = (currentDot, targetDot) => {
//             if (targetDot == null) return;
//             currentDot.classList.remove('current-slide');
//             targetDot.classList.add('current-slide');
//         }

//         const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//             if (targetIndex == 0) {
//                 prevButton.classList.add('is-hidden');
//                 nextButton.classList.remove('is-hidden');
//             }
//             else if (targetIndex == slides.length - 1) {
//                 prevButton.classList.remove('is-hidden');
//                 nextButton.classList.add('is-hidden');
//             }
//             else {
//                 prevButton.classList.remove('is-hidden');
//                 nextButton.classList.remove('is-hidden');
//             }
//         }

//         // When I click left, move slides to the left
//         prevButton.addEventListener('click', e => {
//             const currentSlide = track.querySelector('.current-slide');
//             const prevSlide = currentSlide.previousElementSibling;
//             const currentDot = dotsNav.querySelector('.current-slide');
//             const prevDot = currentDot.previousElementSibling;
//             const prevIndex = slides.findIndex(slide => slide == prevSlide);

//             moveToSlide(track, currentSlide, prevSlide);
//             updateDots(currentDot, prevDot);
//             hideShowArrows(slides, prevButton, nextButton, prevIndex);
//         });

//         // when I click right, move slides to the right
//         nextButton.addEventListener('click', e => {
//             const currentSlide = track.querySelector('.current-slide');
//             const nextSlide = currentSlide.nextElementSibling;
//             const currentDot = dotsNav.querySelector('.current-slide');
//             const nextDot = currentDot.nextElementSibling;
//             const nextIndex = slides.findIndex(slide => slide == nextSlide);

//             moveToSlide(track, currentSlide, nextSlide);
//             updateDots(currentDot, nextDot);
//             hideShowArrows(slides, prevButton, nextButton, nextIndex);
//         });

//         // When I click the nav indicators, move to that slide
//         dotsNav.addEventListener('click', e => {
//             // What indicator was clicked at
//             const targetDot = e.target.closest('button');

//             if (!targetDot) return;

//             const currentSlide = track.querySelector('.current-slide');
//             const currentDot = dotsNav.querySelector('.current-slide');
//             const targetIndex = dots.findIndex(dot => dot == targetDot);
//             const targetSlide = slides[targetIndex];

//             moveToSlide(track, currentSlide, targetSlide);
//             updateDots(currentDot, targetDot);
//             hideShowArrows(slides, prevButton, nextButton, targetIndex);

//         });
//     }       
// };

// --------------------------------------- Full Screen Images On Click --------------------------------------------------------------------------

var carouselTargetLeft = Array.prototype.slice.call(document.getElementsByClassName('carouselLeft'));
var carouselTargetRight = Array.prototype.slice.call(document.getElementsByClassName('carouselRight'));

carouselTargetLeft.forEach(item => AddListenerToCarousel(item));
carouselTargetRight.forEach(carousel => AddListenerToCarousel(carousel));

function AddListenerToCarousel(ctl) {
    var images = Array.prototype.slice.call(ctl.getElementsByClassName('carousel_image'));
    var videos = Array.prototype.slice.call(ctl.getElementsByClassName('video'));
    var carouselContent = images.concat(videos);
    carouselContent.forEach(item => ApplyEventListenerOnImages(item, ctl));
}

function ApplyEventListenerOnImages(image, ctl) {
    image.addEventListener('click', function (e) {
        target = e.target;
        if (target.classList.contains('video') == false) {
            var globalreqfullscreen = getreqfullscreen(ctl);
            if (getfullscreenelement(ctl) == null) {
                globalreqfullscreen.call(ctl);

                setTimeout(function () {
                    const track = ctl.querySelector('.carousel_track');
                    const slides = Array.from(track.children);
                    const slideWidth = slides[0].getBoundingClientRect().width;
                    const setSlidePosition = (slide, index) => {
                        slide.style.left = slideWidth * index + 'px';
                    };
                    slides.forEach(setSlidePosition);
                }, 100);
            }
        }
        else {
            if(target.paused) {
                target.play();
            }
            else {
                e.preventDefault();
                target.pause();

            }         
        }
    }, false);

    image.addEventListener('dblclick', function(e) {
        var target = e.target;
        
        if (target.classList.contains('video') == true) {
            var globalreqfullscreen = getreqfullscreen(target);
            if (getfullscreenelement(target) == null) {
                globalreqfullscreen.call(target);
            }
        }

        var globalexitfullscreen = getexitfullscreen();
        if (target.tagName == "IMG" && getfullscreenelement()) {
            globalexitfullscreen.call(document);
        }
              
    }, false);
}

function getreqfullscreen(ctl){	
	return ctl.requestFullscreen || ctl.webkitRequestFullscreen || ctl.mozRequestFullScreen || ctl.msRequestFullscreen
}

function getexitfullscreen(){
	return document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen
}

function getfullscreenelement(){
	return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
}