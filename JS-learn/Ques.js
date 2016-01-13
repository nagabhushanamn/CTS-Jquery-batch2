/**
 * http://usejsdoc.org/
 */

var tnr = {
	name : 'Nag',
	doTeach : function() {
		console.log(this.name + " teaching JS"); // Nag teaching JS :- this --> tnr
		var that = this;
		function learn() {
			console.log(this.name + ' learning JS from ' + that.name); // :-
		}
		return learn;
	}
};

var learnFunc = tnr.doTeach();

console.log('------------------');

var stud1 = {
	name : 'CTS'
};

learnFunc.call(stud1);