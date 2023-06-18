const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const activitiesLi = document.querySelector('.activities');
    const backArrow = document.querySelector('.back-arrow');

    if (!burger || !nav) {
        return;
    }

    burger.addEventListener('click', () => {
        // Toggle burger
        burger.classList.toggle("active");
        // Toggle Nav
        nav.classList.toggle('nav-active');      
        
        // Animate links
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ''
          }
          else {
              link.style.animation = 'navLinkFade 0.5s ease forwards ' + (CalculateFadeInSpeed(index))  + 's';
          }
        });       
    });

    if (activitiesLi != null) {
      activitiesLi.addEventListener('click', () => {   
        if (window.innerWidth <= 768) {
          navLinks.forEach((element, index) => {
            element.style.display = "none";
          });
  
          var submenu = document.querySelector('.sub-nav-links');
          submenu.classList.add("active");     
          backArrow.classList.add("active"); 
        }        
        
      });
    }   

    if (backArrow != null) {
      backArrow.addEventListener('click', () => {
        var submenu = document.querySelector('.sub-nav-links');
        submenu.classList.remove("active");

        navLinks.forEach((element, index) => {
          element.style.display = "block";
        });
      });
    }

}

navSlide();

function CalculateFadeInSpeed(index) {
  return (index * 0.8/10) + 0.5; 
}

;((win, doc) => {
    'use strict';
    
    win.addEventListener('load', toad, { passive: true, capture: false, once: true });
    win.addEventListener('scroll', rebounce(toad), { passive: true, capture: false, once: false });
    win.addEventListener('resize', rebounce(toad), { passive: true, capture: false, once: false });
  
    function isInViewport (r) {
      return r.top >= 0 && r.left >= 0 && r.top <= win.innerHeight;
    }
  
    function rebounce (f) {
      var scheduled, context, args, i, j;
      
      return function () {
        context = this; 
        args = [];
        i = arguments.length;
        j = 0;
        
        for (;j < i; ++j) {
          args[j] = arguments[j];
        }
        
        if (!!scheduled) {
          win.cancelAnimationFrame(scheduled);
        }
        
        scheduled = win.requestAnimationFrame(() => {
          f.apply(context, args); 
          scheduled = null;
        });
      }
    }
  
    function toad () {
      let elements = doc.querySelectorAll('[data-src]') || [];
      let i = elements.length;
      let j = 0;
      
      for (;j < i; ++j) {
        let this_el = elements[j];
  
        // if (!this_el.getAttribute('data-src') || !isInViewport(this_el.getBoundingClientRect())) {
        //   return;
        // }
        
        if (!!this_el.getAttribute('data-src') && isInViewport(this_el.getBoundingClientRect())) {
          
          if ('img' === this_el.tagName.toLowerCase()) {
            this_el.src = this_el.getAttribute('data-src');
            this_el.removeAttribute('data-src');
            
          } else {
            this_el.style.backgroundImage = 'url(' + this_el.getAttribute('data-src') + ')';
            this_el.removeAttribute('data-src');
          }
          
        }
        
      }
    }
  
  })(window, window.document);

