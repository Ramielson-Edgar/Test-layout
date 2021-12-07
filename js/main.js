const allSliders =document.querySelectorAll('.copy-how-it-work-item');
const sliderList = document.querySelector('.copy-how-it-work-list')
const animationContainers = document.querySelectorAll('.animation-container')
 


// SLIDER
// смешения
let offset = 0
 
// Управления слайдером вперёд
document.querySelector('.next-slide').addEventListener('click', ( )=> {
     offset += 458;

        
        if(offset > 1374) {
            offset = 0
            sliderList.style.left = offset;
            return
        }

        sliderList.style.left = -offset + 'px';
        document.querySelector('.next-slide p').classList.add('active-btn')
        document.querySelector('.previously-slide p').classList.remove('active-btn')
})

 
// Управления слайдером назад
 document.querySelector('.previously-slide').addEventListener('click', ()=> {
        offset -= 458;


        if(offset < 0)  {
             offset = 1374;
             sliderList.style.left = offset;
             return
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
   

        // if( event.target !== animationContainers) {
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
        animationContainer.addEventListener('click', (event)=> {
  
         
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


 