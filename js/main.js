$( document ).ready(function() {
    
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
	
});

