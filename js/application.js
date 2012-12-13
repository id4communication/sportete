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
	    
	    if (!(typeof($('#recherche_avancee').searchbox) == undefined)) {
	    	$('#recherche_avancee').searchbox();
	    }
    	$('input[rel="date"]').each(function() {
    		 if (!(typeof($(this).datepicker) == undefined)) {
    			 $(this).datepicker({});
    		 }
    	});
	    
	    //Scroll to form error
	    $('form .alert-form').each(function(i, item) {
	    	if (i == 0) {
	    		$.scrollTo($(this), 1000, { offset: -400 });
	    	}
	    });
	    
	} catch (e) {
		console.log(e);
	}
	$('body').css('visibility', 'visible');
});