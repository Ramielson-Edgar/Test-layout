const allSliders =document.querySelectorAll('.copy-how-it-work-item');
const sliderList = document.querySelector('.copy-how-it-work-list')
const activeContainer = document.querySelector('.active-slider')


function activeSlide (result) {
  
    if(result.contains('active')) {
        activeContainer.appendChild(result)
    }

    if(result.id === result.id) {
          console.log(result.id)
    }  
      
    
   
}



for (const slide of allSliders) {
    slide.addEventListener('click', ()=> {
        clearActiveClass()

         
      slide.classList.add('active');
 
        activeSlide(slide)
    })

}

function clearActiveClass() {
    allSliders.forEach((slide)=> {
        slide.classList.remove('active')

    })
}


const slideUp = {
    distance: '30%',
    origin: 'bottom',
    opacity: null,
    delay: 300,
    opacity: 0
};





ScrollReveal().reveal('.copy-hero-section .copy-header, .copy-features-header, .copy-trading-platform-header, .copy-how-it-work-section',  slideUp);
ScrollReveal().reveal( `.copy-trading-platform-features-item , .registration-form, .copy-features-wrapper, .try-out-wrapper, .copy-trading-platform-banner`, slideUp);