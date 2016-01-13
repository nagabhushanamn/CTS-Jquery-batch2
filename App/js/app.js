/**
 * http://usejsdoc.org/
 */

document.addEventListener('DOMContentLoaded', function(e) {

	console.log('event - ' + e.type);

	var showBtn = document.getElementsByClassName('btn-success')[0];
	var hideBtn = document.getElementsByClassName('btn-danger')[0];
	var msgBox = document.getElementsByClassName('jumbotron')[0];

	showBtn.addEventListener('click', function(e) {
		msgBox.style.display = "block";
	});
	hideBtn.addEventListener('click', function(e) {
		msgBox.style.display = "none";
	});

});

window.addEventListener('load', function(e) {
	console.log('event - ' + e.type);
});
// window.onload=function(e){};
