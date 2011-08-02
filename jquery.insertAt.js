/**
 * [ISC License](http://en.wikipedia.org/wiki/ISC_license)
 *
 * Copyright (c) Year(s), Company or Person's Name <E-mail address>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
;(function(global, $, undefined) {
	// Insert content inside the
	$.fn.insertAt = function(content, index) {

		// Simple case if we are inserting at the beginning
		if (index === 0) {
			return this.prepend(content);
		}

		// Otherwise we should the children of each DOM object in the set to
		// determine the correct insert position for each one
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
