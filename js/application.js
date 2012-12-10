// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function() {
	try {
		// Disable certain links in docs
	    $('section [href^=#]').click(function (e) {
	      e.preventDefault();
	    });
	
	    // make code pretty
	    window.prettyPrint && prettyPrint();
	
	    // tooltip / popover
	    $('[rel="tooltip"]').tooltip();
	    $('[rel="popover"]').popover();
	
	    // carousel
	    $('[data-toggle="carousel"]').each(function() {
	    	$(this).carousel( {
	    		interval: $(this).attr('data-interval')
	    	});
	    });
	    
	    $('#recherche_avancee').searchbox();
	} catch (e) {
		console.log(e);
	}
	$('body').css('visibility', 'visible');
});