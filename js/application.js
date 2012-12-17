// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function() {
	try {
	    if (!(typeof($('#recherche_avancee').searchbox) == undefined)) {
	    	$('#recherche_avancee').searchbox();
	    }
	    
	    $('#form-newsletter').submit(function(e){
	    	e.preventDefault();
	    	var email = $('#subscriber_email').val();
	    	window.location = $(this).attr('action') + '/' + email;
	    });
	    
	} catch (e) {
		console.log(e);
	}
	$('body').css('visibility', 'visible');
});