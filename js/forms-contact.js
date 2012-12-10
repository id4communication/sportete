$(document).ready(function(){
	
	$('#sportete_website_contact_form_type_isCatalog_0').change(function(){
		if ($(this).is(':checked')) {
			$('#wrapper-catalogs').show();
		} else {
			$('#wrapper-catalogs').hide();
		}
	});
	
	$('#sportete_website_contact_form_type_origin').change(function(){
		var selectedOption = $(this).find('option:selected').val();
		if (selectedOption == 10) {
			$('#precision-origin').show();
			$('#precision-origin').addClass('required');
		} else {
			$('#precision-origin').hide();
			$('#precision-origin').val('');
			$('#precision-origin').removeClass('required');
		}
	});
	
	if ($('#sportete_website_contact_form_type_origin option:selected').val() == '10') {
		$('#precision-origin').show();
	} else {
		$('#precision-origin').hide();
	}
	
	if ($('#sportete_website_contact_form_type_isCatalog_0:checked').length > 0) {
		$('#wrapper-catalogs').show();
	} else {
		$('#wrapper-catalogs').hide();
	}
	
	var onClickAddActivity = function() {
		addActivityForm();
        return false;
	};
	
	var addActivityForm = function() {
	    var prototype = $('#activities-list').attr('data-prototype');
	    
	    // Replace '$$name$$' in the prototype's HTML to
	    // instead be a number based on the current collection's length.
	    var $form = $(prototype.replace(/__name__/g, $('#activities-list .activity').length));
	    
	    // Display the form in the page in an li, before the "Add a tag" link li
	    $('#activities-list').append('<div class="activity"></div>');
	    $('#activities-list .activity:last').append($form);
	    
	    addRemoveActivityLink($('#activities-list .activity:last'));
	};
	
	var addRemoveActivityLink = function($activity) {
		var $delete = $('<a href="#" class="activity-delete"><i class="icon-remove"></i></a>');
		$delete.on('click',remove);
		$activity.append($delete);
	};
	
	var remove = function(e) {
		e.preventDefault();
		$(this).parent().remove();
		return false;
	};
	
	$('#activity-add').click(onClickAddActivity);
	$('#activities-list .activity').each(function() {
		addRemoveActivityLink($(this));
	});
	
	if (!(typeof($('.datepicker').datepicker == undefined)))
		$('.datepicker').datepicker( { dateFormat: 'dd-mm-yy' } );
});