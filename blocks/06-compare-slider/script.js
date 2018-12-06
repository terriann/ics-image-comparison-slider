jQuery(function(){
    jQuery('.ics-slide-wrapper').each(function(){
		var item = jQuery(this),
			caption_before = item.data('caption-left'),
			caption_after = item.data('caption-right'),
			default_offset_pct = item.data('offset-percent') / 100.0;

		item.twentytwenty({
			default_offset_pct: default_offset_pct,
			//: 'vertical', // Orientation of the before and after images ('horizontal' or 'vertical')
			before_label: caption_before, // Set a custom before label
			after_label: caption_after, // Set a custom after label
			//no_overlay: true, //Do not show the overlay with before and after
			move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
		  });
	});
});
