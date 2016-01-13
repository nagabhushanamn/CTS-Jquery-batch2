/**
 * http://usejsdoc.org/
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
	// this.sayName = function() {
	// console.log('im ' + this.name);
	// };
}

//

Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};

var p1 = new Person('nag', 32);
var p2 = new Person('Riya', 0.8);

// duplicates ---> Inheritance

// How inheritance implmented in JS
