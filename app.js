/* EX 7 objects */
/* ------------------------------------------------------ */
/* different ways of string declaration */
/* var strPrimitive = "I am a string";
console.log(typeof strPrimitive);							
console.log(strPrimitive instanceof String);					

var strObject = new String( "I am a string" );
console.log(typeof strObject);
console.log(strObject instanceof String); */

/* ------------------------------------------------------ */
/* Arrays are objects, so even though each index is a positive integer, you can also add properties onto the array */

/* var myArray = [ "foo", 42, "bar" ];

myArray.baz = "baz";

console.log(myArray.length);

console.log(myArray.baz); */

/* ------------------------------------------------------ */
/* getting property descriptors */

/* var myObject = {
	a: 2
};

console.log(Object.getOwnPropertyDescriptor( myObject, "a" )); */

/* ------------------------------------------------------ */
/* define property */

/* var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,
	configurable: true,
	enumerable: true
} );

console.log(myObject.a); */
