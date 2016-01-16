/**
 * http://usejsdoc.org/
 */

(function() {
	
	var pluginSettings={
			prop:"some-value"
	};

	// jQuery.fn
	$.fn.applyFont = function(config) {

		var settings = {
			size : '15px'
		};

		// if (config.color) {
		// settings.color = config.color;
		// }

		$.extend(settings, config);

		this.css('font-size', settings.size);

		return this;
	};

})();