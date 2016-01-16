/**
 * http://usejsdoc.org/
 */

$(function() {

	// $(".jumbotron").css('color','red');

	// statement chaining
	$('#box1').applyColor({
		color : 'green'
	}).applyFont({
		size : '25px'
	});

	$('#box2').applyColor();

	$('#dp').datepicker({
		showOn : "button",
		buttonImage : "images/calendar.gif",
		buttonImageOnly : true,
		buttonText : "Select date"
	});

});
