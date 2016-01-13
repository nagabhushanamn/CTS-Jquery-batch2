/**
 * http://usejsdoc.org/
 */


/*
 *   'this' keyword
 *   
 *   
 *   In JS , we can invoke functions in 4 ways/patterns
 *   
 *   a. function invocation pattern
 *   b. method invocation pattern
 *   c. call/apply/bind invocation pattern
 *   d. constructor invocation pattern
 * 
 * 
 */


// why we need 'this' keyword ?


//  var person={
//		  name:'Nag',
//		  sayName:function(){
//			  console.log('im '+this.name);
//		  }
//  };
//  
//  //person.sayName();
//  
//  var oldPerson=person;
//  person={};
//  
//  
//  oldPerson.sayName();
//  
  
  
  /*
   *  Note : never access obj-properties in a function using 'reference var-names '
   *         use 'this' keyword
   *       
   * 
   */

//---------------------------------------------------------------------------------

//function sayNameForAll(){
//	console.log('im '+this.name);
//}
//
//
////var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
////var p2={name:'Riya',sayName:function(){console.log('im '+this.name);}};
//
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Riya',sayName:sayNameForAll};
//
//
//sayNameForAll()  //  im undefined : function-invocation pattern :- 'this' --> global-object
//p1.sayName();    //  im Nag       : method-invocation pattern   :- 'this' --> invoker obj
//p2.sayName();    //  im Riya
//  
//  
//  
//  
  
/*
 *  Function-Binding
 *  
 *  In JS ,
 *  every function binded with one obj at runtime
 * 
 */  
  
  //--------------------------------------------------------------------------------


//
//var greetUtil={
//		sayName:function(message , anotherMessage){
//			console.log(message+" "+this.name +" "+anotherMessage);
//		}
//};
//
//var p1={name:'Nag'};
//var p2={name:'Riya'};
//
//
////greetUtil.sayName();  // greetUtil
//
//// Eager
//greetUtil.sayName.call(p1,'Im' ,"from Bangalore-India");     // 'call' invocation pattern
//greetUtil.sayName.apply(p2,['Im' ,"from Chennai-India"]);    // 'apply' invocation pattern
//
//// Lazy
//var newF=greetUtil.sayName.bind(p1,'Im' ,"from Bangalore-India");     // 'bind' invocation pattern
//// if greet-event occur
//newF();



// --------------------------------------------------------------------------------




 // I need le or ge 1000 person objects

/*
 * 'constructor' func === class in other languages ( like in java )
 * 
 * 
 */

function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayName=function(){
		console.log('im '+this.name);
	};
}

var p1=new Person('Nag', 32);  // consructor invocation pattern :- 'this' --> new-object
var p2=new Person('Riya',0.8);



//----------------------------------------------------------------

// Ques

Person('Abc',10);





  
  
  
  
  
  
  

