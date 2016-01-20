/**
 * http://usejsdoc.org/
 */

$(function() {

	// $("#loginForm").submit(function(event) {
	//
	// event.preventDefault();
	//
	// var $email = $("#email", this);
	//
	// var email = $email.val();
	//
	// if (!email.trim()) {
	//
	// // console.log('email field empty...');
	//
	// // $email.closest("div").addClass("has-error");
	// // $email.focus();
	//
	// $email.after("<span class=text-danger>Email is required</span>");
	//
	// }
	//
	// });

	// way-2

	$("#loginForm").validate({
		rules : {
			email : {
				required : true,
				email : true
			}
		},
		messages : {
			email : "Pls enter valid email"
		}

	});

});
