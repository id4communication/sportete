(function( $ ) {
	$.widget( "ui.gallery", {
		_create: function() {
			var widget = this, gallery = this.element;
			
			gallery.find('.thumbnails-gallery > li').each(function() {
				$(this).css('cursor', 'pointer');
				$(this).click(function() {
					gallery.find('.main-picture').carousel(parseInt($(this).attr('data-image-i')));
				});
			});
			gallery.find('.main-picture').on('slide', function(e) {
				if (gallery.find('.thumbnails-gallery').attr('data-direction') == 'vertical') {
					var height = gallery.find('.thumbnails-gallery li:first').outerHeight();
					gallery.find('.thumbnails-focus').animate({
					    top: ($(e.relatedTarget).attr('data-image-i')*height),
					}, 2500, function() {
						// Animation complete.
					});
				} else {
					var width = gallery.find('.thumbnails-gallery li:first').outerWidth();
					gallery.find('.thumbnails-focus').animate({
					    left: ($(e.relatedTarget).attr('data-image-i')*width),
					}, 2500, function() {
						// Animation complete.
					});
				}
			});
		},
	});
})( jQuery );
$(document).ready(function() {
	$('.gallery').each(function() {
		$(this).gallery();
	});
});