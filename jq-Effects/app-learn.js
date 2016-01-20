/**
 * http://usejsdoc.org/
 */

/*
 * jquery effects Methods
 * 
 * 
 * hide() show()
 * 
 * toggle()
 * 
 * --------------
 * 
 * slideDown() slideUp() slideToggle()
 * 
 * ----------------
 * 
 * fadeIn() fadeOut() fadeToggle()
 * 
 * -----------------
 * 
 * custom animation
 * 
 * animate()
 * 
 * -----------------
 * 
 * queue() delay() dequeue() clearqueue()
 * 
 * finish()
 * 
 * -------------------
 * 
 * 
 * 
 */

$(function() {

	$("button").click(function() {

		// $(selector).effectXXX(speed,easing,callback)

		// Hide and Show

		// $("div.jumbotron").hide();
		// $("div.jumbotron").show();
		// $("div.jumbotron").toggle(400, 'linear', function() {
		// console.log('after hide/show action..');
		// });

		// Fade effects

		// $("div.jumbotron").fadeOut();
		// $("div.jumbotron").fadeIn();
		// $("div.jumbotron").fadeToggle(1000);
		// $("div.jumbotron").fadeTo("slow", 0.5, function() {
		// // Animation complete.
		// });

		// slide effects

		// $("div.jumbotron").slideUp();
		// $("div.jumbotron").slideDown();
		// $("div.jumbotron").slideToggle('slow');
		
		// delay
		
		$("div.jumbotron").delay(1000).fadeOut();

	});

});
