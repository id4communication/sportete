// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function() {
	try {
	    if (!(typeof($('#recherche_avancee').searchbox) == undefined)) {
	    	$('#recherche_avancee').searchbox();
	    }
	} catch (e) {
		console.log(e);
	}
	$('body').css('visibility', 'visible');
});