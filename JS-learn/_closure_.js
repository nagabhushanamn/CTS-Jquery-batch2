/**
 * http://usejsdoc.org/
 */

/*
 * JS - functional Programming
 * 
 * 
 * 
 */

// function tng() {
//
// console.log('Teaching JS');
// var notes = 'JS Notes'; // function-scope / local var
//
// function learn() {
// console.log('learn with ' + notes);
// }
//
// return learn;
// }
//
//
// var learnFunc=tng();
//
// console.log("------------------");
//
// learnFunc();
// learnFunc();
// learnFunc();
// learnFunc();
// -------------------------------------------------------
// counter - module

//function init(){
//	
//	var count=0;   // Private
//	
//	 
//	var mod={      // Public
//			doCount:function(){
//				count++;
//			},
//			getCount:function(){
//				return count;
//			}
//	};
//	
//	return mod;
//	
//}
//
//var counter=init();


//------------------------------------------------------------

 // IIFE ( Immediate Invokable Func Exp ) / SELF Executable func

var counter=(function(){
	
	var count=0;   // Private
	
	 
	var mod={      // Public
			doCount:function(){
				count++;
			},
			getCount:function(){
				return count;
			}
	};
	
	return mod;
	
})();


/*
 *  IIFE syntax
 *  
 *  (func)();
 * 
 */


// ----------------------------------------------------

// client-module

counter.doCount();
counter.doCount();



console.log(counter.getCount());
