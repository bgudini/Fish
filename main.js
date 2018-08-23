$('.header__menu').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('header__menu_active');
	$('.header__menu_window').toggleClass('header__menu_window_active');
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	items: 1,
  	dots: false,
  	nav: true,
  	navText : ["<img src=\"img/backButton.svg\">","<img src=\"img/nextButton.svg\">"],
  	loop: true
  });
  $('.list__slider').smoothDivScroll({
    touchScrolling: true,
    hotSpotScrolling: false
  });
  if (window.screen.width >= 950){
    $('.list__slider').smoothDivScroll({
    touchScrolling: false,
    hotSpotScrolling: false
  });
  }
  $("div.scrollWrapper").niceScroll({cursorwidth: "6px", cursorcolor:"#01E1FF", background: "#C8C8C8", autohidemode: false});
});
