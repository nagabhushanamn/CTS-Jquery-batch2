/**
 * http://usejsdoc.org/
 */

function f() {

	console.log('Hello...');

	try {
		
		setTimeout(function() {
			console.log('After 5s');
			throw new Error('oops');
		}, 5000);
		
	} catch (e) {
		console.log('i caught ' + e);
	}
	
	console.log('Hello Again..');

}

f();