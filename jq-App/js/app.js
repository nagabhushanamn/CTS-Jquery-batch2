/**
 * http://usejsdoc.org/
 */

/*
 * How to use jQuery ?
 * 
 * syntax -------
 * 
 * jQuery(selector) .action1() .action2()
 * 
 * 
 * How to select DOM elements ?
 * 
 * jQuery uses 'CSS-selectors' , to select DOM elements
 * 
 */

//-------------------------------------------------

//jQuery(document).ready(function(e) {
//
//	console.log('DOM/document ready...');
//
//	var msgBox = jQuery('.jumbotron');
//	jQuery('.btn-success').click(function(e) {
//		msgBox.show();
//	});
//	jQuery('.btn-danger').click(function(e) {
//		msgBox.hide();
//	});
//
//});

//-------------------------------------------------


//jQuery  | $

//-------------------------------------------------

// way-1  - selector   e.g $(selector)
//$('div.foo').css('border','1px solid red');  // slow

// way-2  - selector + context e.g $(selector,context)
//$('div.foo','#myBox').css('border','1px solid red');   // fast , added 1.1

//$('div.bar').click(function(e) {
//	$('span',this).addClass('text-danger');
//});



// way-3 - DOM element  e.g $(DOM)
//var msgBox=document.getElementsByClassName('jumbotron')[0];
//$('.jumbotron').click(function(e) {
//	//$(this).slideUp();
//	$(msgBox).slideUp();
//});


// way-4 - JS object e.g $(obj)

//var foo={foo:'bar',hello:'world'};
//var $foo=$(foo);
//
////console.log($foo.prop('hello'));
//$foo.prop('foo','new bar');
//
//console.log($foo.prop('foo'));


//----------------------------------------


/*
 * jQuery | $
 * 
 *  way-1 : $('selector')
 *  way-2 : $('selector','context')
 *  way-3 : $(DOM)
 *  way-4 : $(obj)
 * 
 * 
 */


$.holdReady(true);  

setInterval(function() {
	$.getScript('js/some-script.js', function() {
		$.holdReady(false); 
	});
}, 5000);


$(document).ready(function() {
	console.log('document ready...');
});

















