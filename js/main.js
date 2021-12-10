const allSliders =document.querySelectorAll('.copy-how-it-work-item');
const sliderList = document.querySelector('.copy-how-it-work-list')
const animationContainers = document.querySelectorAll('.animation-bar')

const nextSlide = document.querySelector('.next-slide')
const previouslySlide = document.querySelector('.previously-slide')


// SLIDER
// смешения

 
let viewportWidth = window.innerWidth && document.documentElement.clientWidth ? 
Math.min(window.innerWidth, document.documentElement.clientWidth) : 
window.innerWidth || 
document.documentElement.clientWidth || 
document.getElementsByTagName('body')[0].clientWidth;

let offset = 0

console.log(viewportWidth)
 

// Управления слайдером вперёд
nextSlide.addEventListener('click', ( )=> {

    offset += viewportWidth  <=  575 &&  277.5 || viewportWidth <= 767 && 445;

    if(viewportWidth <= 575 && offset > 832.5) {
        offset = 0
        sliderList.style.left = offset;
        return
    }

 
    if(viewportWidth <= 767 && offset > 1377) {
    offset = 0
    sliderList.style.left = offset;
    return
    }

    sliderList.style.left = -offset + 'px';
    document.querySelector('.next-slide p').classList.add('active-btn')
    document.querySelector('.previously-slide p').classList.remove('active-btn')
})

 
// Управления слайдером назад
    previouslySlide.addEventListener('click', ()=> {

    offset -= viewportWidth  <=  575 &&  277.5 || viewportWidth <= 767 && 445;

    if(viewportWidth <= 575 && offset < 0) {
     offset = 832.5;
     sliderList.style.left = offset;
   
    } 
    

   if(viewportWidth  <= 767 && offset < 0) {
    offset = 1335;
    sliderList.style.left = offset;

   } 
   

   

    sliderList.style.left = -offset + 'px';
    document.querySelector('.next-slide p').classList.remove('active-btn')
    document.querySelector('.previously-slide p').classList.add('active-btn')
})
    
    
// По клику вешаю активный класс 

    for (const slide of allSliders) {

        slide.addEventListener('click', (event)=> {
        clearActiveClass()

        slide.classList.add('active')
   

        // if(viewportWidth === 320 && event.target !== animationContainers) {
        // offset+=277.5;
        // sliderList.style.left = -offset + 'px';
         
        // }


        // if(offset > 832.5) {
        // offset = 0
        // sliderList.style.left = offset;
        // return
        // }

       })
    
    
    }
    

// Сбрасываюс события активного слайда

function clearActiveClass() {
    allSliders.forEach((slide)=> {
        slide.classList.remove('active')

    })
}


// SHOW ANIMATION BAR
function showAnimationBar () {
    for(const animationContainer of animationContainers ) {
        animationContainer.addEventListener('click', ()=> {
  
                animationContainer.classList.toggle('show-vid')
                animationContainer.classList.toggle('hide-vid')
                })
    }
 
}

 showAnimationBar ()



// ANIMATION 
const slideUp = {
    distance: '30%',
    origin: 'bottom',
    opacity: null,
    delay: 300,
    opacity: 0
};


ScrollReveal().reveal('.copy-hero-section .copy-header, .copy-features-header, .copy-trading-platform-header, .copy-how-it-work-section',  slideUp);
ScrollReveal().reveal( `.copy-trading-platform-features-item , .registration-form, .copy-features-wrapper, .try-out-wrapper, .copy-trading-platform-banner`, slideUp);


 