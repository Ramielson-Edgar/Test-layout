const allSliders =document.querySelectorAll('.copy-how-it-work-item');
const sliderList = document.querySelector('.copy-how-it-work-list')

let offset = 0
  
document.querySelector('.next-slide').addEventListener('click', ()=> {
    offset = offset + 277.5;

    for (const slide of allSliders) {
 
        slide.addEventListener('click', ()=> {
        
        
       })
    
    
    }

 
    if(offset > 1374) {
        offset = 0
        sliderList.style.left = offset;
    }


    sliderList.style.left = -offset + 'px';
    document.querySelector('.next-slide p').classList.add('active-btn')
    document.querySelector('.previously-slide p').classList.remove('active-btn')

})


document.querySelector('.previously-slide').addEventListener('click', ()=> {
    offset = offset - 458;
    
    if(offset < 0)  {
         offset = 1374;
         sliderList.style.left = offset;
    }

    sliderList.style.left = -offset + 'px';
    document.querySelector('.next-slide p').classList.remove('active-btn')
    document.querySelector('.previously-slide p').classList.add('active-btn')
})


for (const slide of allSliders) {
 
    slide.addEventListener('click', ()=> {
       clearActiveClass()
   
        
     slide.classList.toggle('active')
    //  slide.classList.toggle('non-active')
    
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


 