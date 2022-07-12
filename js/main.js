$(function(){   
 
   $(".menu a, .go-top").on("click", function (event) {
      //відміняєм стандартну обробку кліку по ссилці
		event.preventDefault();

      // забираєм індифікатор блоку з атрибутом href
		var id  = $(this).attr('href'),

      //дізнаємся висоту від початку сторінки до блоку на який зсилається якір
			top = $(id).offset().top;
		
      //анімуєм перехід на відстань - top за 1500мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    

  $('.slider-blog__inner').slick({ 
     dots:true, 
     prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>', 
     nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>', 
     responsive: [
      {
        breakpoint: 769,
        settings: {
         arrows: false,
        }
      },
     
    ]
  });
 
    $('.menu__btn, .menu a').on('click', function(){ 
       $('.header__top-inner').toggleClass('header__top-inner--active'); 
    });  
     
     
    var mixer = mixitup('.portfolio__content');  
});