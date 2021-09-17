window.addEventListener('DOMContentLoaded', function(){
  var slideIndex = 0;
  carousel();

  function carousel() {
    //needed for index
    var slide = document.getElementsByClassName("mySlides");
    //variables
    var logo = document.querySelector(".logo");
    var btn = document.querySelector(".cta");
    var products = document.querySelector(".slideProd");
    var productsSlideNext = document.querySelector(".prod");
    var background = document.querySelector('.bg');
    var headline = document.querySelector('.headline');

    for (var i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }
    slideIndex = slideIndex + 1 ;
    var myTimeout = setTimeout(carousel, 8000);

    if (slideIndex > slide.length) { 
      slideIndex = 2
      clearTimeout(myTimeout)
    }

    if( slide[slideIndex-1].classList.contains("first") ){
      products.classList.add("productsAnim");
    }

    if( slide[slideIndex-1].classList.contains("second") ){
      //remove
      products.classList.remove("productsAnim");
      //add
      background.classList.add("bgUp");
      productsSlideNext.classList.add("bgUp");
      setTimeout(function() {
        productsSlideNext.classList.add("fadeOut");
      }, 100);
     
      headline.classList.add("headlineAnim");
      
      setTimeout(function() {
          logo.classList.add("fadeIn");
          setTimeout(function() {
            btn.classList.add("fadeIn");
          }, 1000);
       
      }, 1000);
    }

    else{
      slide[slideIndex-1].style.display = "block";
    }
    slide[slideIndex-1].style.display = "block";
  }  
});