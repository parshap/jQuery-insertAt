/**
 * Copyright (c) Parsha Pourkhomami <parshap@gmail.com>
 *
 * Redistribution and use in source and compiled forms, with or without
 * modification, are permitted under any circumstances. No warranty.
 */
;(function(global, $, undefined) {
	$.fn.insertAt = function(content, index) {

		// Simple case if we are inserting at the beginning
		if (index === 0) {
			return this.prepend(content);
		}

		// Otherwise we should examine the children of each DOM object in the
		// set to determine the correct insert position for each one
		return this.each(function() {
			var $this = $(this),
				el = $this.children().get(index);

			// If an element already exists at this index, insert before it
			if (el) {
				$(el).before(content);
			}

			// Otherwise insert at the end
			else {
				$this.append(content);
			}
		});
	};
})(window, jQuery);
