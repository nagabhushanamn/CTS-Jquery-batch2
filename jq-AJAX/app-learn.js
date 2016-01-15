/**
 * http://usejsdoc.org/
 */

$(function() {

	$("#b1").click(function() {

		// Request to server using XHR API
		var url = "info.txt";

		$.ajax(url, {
			success : function(data, status, xhr) {
				//console.log(data);
				$("#box").text(data);
			}
		});

	});

});
