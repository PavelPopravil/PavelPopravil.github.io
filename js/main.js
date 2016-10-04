$( document ).ready(function() {
    

	// navig-trigger

	$('.js-triggerLink').on('click', function(e) {

		e.preventDefault();
		$('.js-triggerLink').toggleClass('opened');

		$('.js-navigation').slideToggle(400, function() {
			$(this).toggleClass('nav-expanded').css('display', '');
		});
	});

    // JSsize
    $('.JsSize li').has('.dropMe').hover(
    		function() {
    			$(this).find('.dropMe').stop(true, true).slideDown();
    		},
    		function() {
    			$(this).find('.dropMe').stop(true, true).slideUp();
    		}
	);

	// JsCarousel
	$('.jsCarousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        420:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	})

	// Search
	$('.JsSearchClick').click(function() {
		$('.JsSearchField').slideToggle();
	});

	// SLIDESHOW 

	$('.js-slideshowLink').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.js-slideshowItem'),
			container = $this.closest('.js-slideShowCont'),
			display = container.find('.js-slideshowDisplay'),
			path = item.find('img').attr('src'),
			duration = 250;

		if (!item.hasClass('active')) {

			item.addClass('active').siblings().removeClass('active');
			
			display.find('img').fadeOut(duration, function() {
				$(this).attr('src', path).fadeIn(duration);
			});
		}

	});

	$('.buttn__link').click(function(e) {
		e.preventDefault();
	});
	
});

