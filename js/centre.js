$(document).ready(function() {
	var centre_id = $('#destination-map').attr('data-centre-id');
	var DestinationMap = {
		toFullScreen: function() {
			$('#destination-map').addClass('full-screen');
			$('#destination-map').removeClass('small-screen');
			$('.entete_destination_resume .addons .localisation').addClass('full-screen');
			$('.entete_destination_resume .addons .localisation > a').click(DestinationMap.toSmallScreen);
			var uri_map_destination = Routing.generate('sportete_website_centre_map', { centre_id: centre_id, mode: 'full' });
			$('#destination-map').attr('src', uri_map_destination);
		},
		toSmallScreen: function() {
			$('#destination-map').addClass('small-screen');
			$('#destination-map').removeClass('full-screen');
			$('.entete_destination_resume .addons .localisation').removeClass('full-screen');
			$('.entete_destination_resume .addons .localisation > a').click(DestinationMap.toFullScreen);
			var uri_map_destination = Routing.generate('sportete_website_centre_map', { centre_id: centre_id, mode: 'small' });
			$('#destination-map').attr('src', uri_map_destination);
		}
	};
	var uri_map_destination = Routing.generate('sportete_website_centre_map', { centre_id: centre_id , mode: 'small' });
	$('#destination-map').attr('src', uri_map_destination);
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