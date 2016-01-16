/**
 * http://usejsdoc.org/
 */

/*
 * IIFE / SELF Executable func
 * 
 */

(function() {

	var pluginSettings = {
		prop : "some-value"
	};

	// jQuery.fn
	$.fn.applyColor = function(config) {

		var settings = {
			color : 'red'
		};

		// if (config.color) {
		// settings.color = config.color;
		// }

		$.extend(settings, config);

		this.css('color', settings.color);
		
		// any logic , that need to do..

		return this;
	};

})();