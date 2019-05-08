/* EX 8 objects' immutability */
/* ------------------------------------------------------ */
/* create object constant */
/* var myObject = {};

Object.defineProperty( myObject, "FAVORITE_NUMBER", {
	value: 42,
	writable: false,
	configurable: false
} );

myObject.FAVORITE_NUMBER = 90;

console.log(myObject); */

/* ------------------------------------------------------ */
/* prevent extensions */
/* var myObject = {
	a: 2
};

Object.preventExtensions( myObject );

myObject.b = 3;
console.log(myObject.b); */

/* ------------------------------------------------------ */
/* seal object = prevent extensions and mark all its existing properties as configurable:false */
/* var myObject = {
	a: 2
};

Object.seal( myObject );

myObject.b = 3;
console.log(myObject);
myObject.a = 3;
console.log(myObject); */

/* ------------------------------------------------------ */
/* freeze object = prevents any changes to the object or to any of its direct properties */
/* var myObject = {
	a: 2
};

Object.freeze( myObject );

myObject.b = 3;
console.log(myObject);
myObject.a = 3;
console.log(myObject) */;

/* -------------------------------------------------------------------- */
/* define getters and setters */

/* var myObject = {
	get a() {
		return this._a_;
	},
	set a(val) {
		this._a_ = val * 2;
	}
};

myObject.a = 2;
console.log(myObject.a); */

/* -------------------------------------------------------------------- */
/* explain enumerable  */

/* var myObject = { };

Object.defineProperty(
	myObject,
	"a",
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	"b",
	{ enumerable: false, value: 3 }
);

console.log(myObject.b);
console.log(("b" in myObject));
console.log(myObject.hasOwnProperty( "b" )); 

for (var k in myObject) {
	console.log( k, myObject[k] );
}

console.log(myObject.propertyIsEnumerable( "a" )); 
console.log(myObject.propertyIsEnumerable( "b" ));

console.log(Object.keys( myObject ));
console.log(Object.getOwnPropertyNames( myObject )); */

/* -------------------------------------------------------------------- */
/* for in, for each, for of  */

/* var obj = {
  a: 1,
  b: 2,
  c: 3
};

var arr = [4, 5, 6];

for(let i in obj){
  console.log(i);
}

arr.forEach((item) => {
  console.log(item);
})

for(let i of arr){
  console.log(i);
} */