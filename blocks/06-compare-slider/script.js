jQuery(function(){
    jQuery('.ics-slide-wrapper').each(function(){
		var item = jQuery(this),
			orientation_set = item.data('orientation'),
			caption_before = item.data('caption-left'),
			caption_after = item.data('caption-right'),
			default_offset_pct = item.data('offset-percent') / 100.0,
			no_overlay = item.data('no-overlay'),
			move_with_handle = item.data('handle-move'),
			move_on_hover = item.data('hover-move'),
			click_to_move = item.data('click-move');

		item.twentytwenty({
			default_offset_pct: default_offset_pct,
			orientation: orientation_set,
			before_label: caption_before,
			after_label: caption_after,
			no_overlay: no_overlay,
			move_with_handle_only: move_with_handle,
			move_slider_on_hover: move_on_hover,
			click_to_move: click_to_move,
		  });
	});
});
