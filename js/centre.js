$(document).ready(function() {
	var uri_map_full = $('#destination-map').attr('data-map-full');
	var uri_map_small = $('#destination-map').attr('data-map-small');
	var DestinationMap = {
		toFullScreen: function() {
			$('#destination-map').addClass('full-screen');
			$('#destination-map').removeClass('small-screen');
			$('.entete_destination_resume .addons .localisation').addClass('full-screen');
			$('.entete_destination_resume .addons .localisation > a').click(DestinationMap.toSmallScreen);
			$('#destination-map').attr('src', uri_map_full);
		},
		toSmallScreen: function() {
			$('#destination-map').addClass('small-screen');
			$('#destination-map').removeClass('full-screen');
			$('.entete_destination_resume .addons .localisation').removeClass('full-screen');
			$('.entete_destination_resume .addons .localisation > a').click(DestinationMap.toFullScreen);
			$('#destination-map').attr('src', uri_map_small);
		}
	};
	$('#destination-map').attr('src', uri_map_small);
	$('#destination-full-map').click(DestinationMap.toFullScreen);
	$('.thumbnails-centre > li').each(function() {
		$(this).css('cursor', 'pointer');
		$(this).click(function() {
			$('.main-picture').carousel(parseInt($(this).attr('data-image-i')));
		});
	});
	$('.main-picture').on('slide', function(e) {
		$('#thumbnails-focus').animate({
		    top: ($(e.relatedTarget).attr('data-image-i')*71),
		}, 2500, function() {
			// Animation complete.
		});
	});
});