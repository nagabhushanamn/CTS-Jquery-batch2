/**
 * http://usejsdoc.org/
 */

$(function() {

	$("#b1").click(function() {

		// Request to server using XHR API

		// var url = "info.txt";
		// var url = "products.xml";
		// var url = "products.json";

		// $.ajax(url, {
		// dataType : 'json',
		// success : function(data, status, xhr) {
		//
		// console.log(data);
		//
		// // $("#box").text(data);
		//
		// // var xmlDoc=data;
		// // var products=xmlDoc.getElementsByTagName('product');
		// // products.forEach(function(elt, i) {
		// // $(elt).find('name');
		// // });
		//
		// // data.products.forEach(function(elt, i) {
		// // console.log(elt);
		// // });
		//
		// },
		// error : function(xhr, status, message) {
		// console.log(status + " - " + message);
		// }
		//
		// });

		// -----------------------------------

		// sending any data to server with AJAX Request

		// var o = {
		// type : 'jQuery',
		// version : 2.0
		// };
		//
		// $.ajax('search', {
		// // method : 'GET',
		// method : 'POST',
		// data : o
		// });

		// ---------------------------------------
		//
		// $.ajax('info.txt', {
		// cache:false,
		// success : function(result,staus,xhr) {
		// $("#box").text(result);
		// }
		// });

		// ------------------------------------------
		//		
		// var
		// url="http://filltext.com/?rows=20&fname={firstName}&lname={lastName}";
		// $.ajax(url,{
		// dataType:'json',
		// // crossDomain:true,
		// // jsonp:'onJSONPLoad',
		// success:function(persons){
		// persons.forEach(function(person){
		// console.log(person);
		// });
		// }
		// });

		// --------------------------------------------------------

		// var jqXhr = $.ajax('info.txt', {
		// beforeSend : function() {
		// console.log('pls wait....');
		// }
		// });
		//
		// jqXhr.done(function(result) {
		// console.log(result);
		// }).fail(function() {
		// consooe.log('error');
		// }).always(function() {
		// consooe.log('alwyas..');
		// });

		// ----------------------------------------------------

		$("#box").load("title.html");

		// ----------------------------------------------------

	});

	// $("#productForm").submit(function(event) {
	//
	// event.preventDefault();
	//
	// $.post('products', {
	// data : $(this).serializeArray()
	// });
	//
	// });

	$(document).ajaxSend(function() {
		console.log('before any AJAX request...');
	});

});
