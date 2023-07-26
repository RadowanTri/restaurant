(function ($) {
	
	"use strict";
// owl carousel 
$('.banner-carousel').owlCarousel({
  loop:false,
  margin:20,
dots:true,
nav: false,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
  1000:{
          items:1
      },
      1200:{
          items:1
      }
  }
});
$('.counter').counterUp({
  delay: 10,
  time: 3000
});

// owl carousel 
$('.client-carousel').owlCarousel({
  loop:false,
  margin:20,
dots:true,
nav: false,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
  1000:{
          items:1
      },
      1200:{
          items:1
      }
  }
});
})(window.jQuery);