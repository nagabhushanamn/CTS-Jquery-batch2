/**
 * http://usejsdoc.org/
 */

// in standard way
// var btn = document.getElementById("b1");
//
// btn.addEventListener('click', function(e) {
// console.log('event - ' + e.type + " on " + e.target.id);
// }, false);
// btn.addEventListener('mouseover', function(e) {
// console.log('event - ' + e.type + " on " + e.target.id);
// }, false);
// with jquery
/*
 * .on()
 * 
 * 
 */

$(function() {

	// simple event binding
	// $("#b1").on("click",function(){
	// console.log('click event..');
	// });

	// many events , but onle one event handler
	// $("button").on('mouseenter mouseleave click',function(event){
	// console.log("Event - "+event.type);
	// });

	// many event and handlers
	// $("button").on({
	// mouseenter : function() {
	// console.log('mouse enter action');
	// },
	// click : function() {
	// console.log('mouse click action');
	// },
	// mouseleave : function() {
	// console.log('mouse leave action');
	// }
	// });

	// The event object

	// $("button").on('click',function(event){
	// console.dir(event);
	// });

	// Passing extra to the event Handler...

	// $("button").on('click',{foo:'bar'},function(event){
	// console.dir(event.data.foo);
	// });

	// -------------------------------------------------------------------

	// setInterval(function() {
	// $("<button class='btn btn-danger'> New Button
	// </button>").appendTo(".jumbotron");
	// }, 3000);

	// Event Delegation ( Binding events to the elements that dont exist yet

	// $('.jumbotron').on('click','.btn',function(event){
	// console.log('event on '+$(this).text());
	// });

	// Connecting events to run only once

	// $("button").one('click',function(event){
	// console.log('this will execute only once');
	// });

	// unbind or disconnect Events

	// $("button").on('click', function(event) {
	// console.log("event");
	// });
	//
	// setTimeout(function() {
	// $("button").off('click');
	// }, 3000);

	// ----------------------------------------------------------------------

	// Event Propagation
	//
	// $("#b2").on('click', function(event) {
	// console.log('Handling event on #b2');
	// event.stopPropagation(); //
	// });
	//
	// $("#box").on('click', function(event) {
	// console.log('Handling event on #box');
	// });

	// ----------------------------------------------------------------------

	/*
	 * Event Propagation
	 * 
	 * --> bubbling phase ( default ) --> capturing phase
	 * 
	 * 
	 */

	// ----------------------------------------------------------------------
	// $("#loginForm").on('submit',function(event){});
	$("#loginForm").submit(function(event) {

		event.preventDefault();

		var userName = $("#uname", this).val();
		var password = $("#pword", this).val();

		console.log(userName + " " + password);

		// AJAX Req , validate

		$(this).hide();

	});
	/*
	 * some events has default-behav
	 * 
	 * 
	 * e.g
	 * 
	 * click event on <a> elements , always reload current web-page
	 * 
	 * submit event on form element by submitting form also reload current page
	 * 
	 * 
	 */

	// -------------------------------------------------------------------
	// How to trigger an event thru our program?
	// $("#b3").click(function(event){
	// console.log('success button clicked....');
	// $("#loginForm").trigger('submit'); // submit...
	// });
	// -----------------------------------------------------------------------
	
	
	/*
	 *  History jquery events
	 *  
	 *  // deprecated
	 *  
	 *  .bind()
	 *  .unbind()
	 *  .live()
	 *  .delegate()
	 *  
	 *  // 1.7
	 *  
	 *  .on()
	 *  .off()
	 *  
	 *  shortcut event methods
	 *  
	 *  click()
	 *  submit()
	 *  focus()
	 *  
	 * 
	 */

});
