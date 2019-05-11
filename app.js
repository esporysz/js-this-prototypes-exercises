/* EX 9 prototypes */
/* ------------------------------------------------------ */
/* creating a new object */

/* var anotherObject = {
	a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create( anotherObject );
// hasOwnProperty looks only into myObject
console.log(myObject.hasOwnProperty('a'));
// in perform chain look-up
console.log('a' in myObject); */

/* ------------------------------------------------------ */
/* shadowing a property case 1*/

/* var anotherObject = {
	a: 1
};

var myObject = Object.create( anotherObject );
myObject.a = 2;
console.log(anotherObject);
console.log(myObject); */

/* ------------------------------------------------------ */
/* shadowing a property case 2 */
/* var anotherObject = {};
Object.defineProperty( anotherObject, 'a', {
	value: 1,
	writable: false,
  configurable: false,
  enumerable: true
} );

var myObject = Object.create( anotherObject );
myObject.a = 2;
console.log(anotherObject);
console.log(myObject); */

/* ------------------------------------------------------ */
/* shadowing a property case 3 */
/* var anotherObject = {
	get a() {
		return this._a_;
	},
	set a(val) {
		this._a_ = 5;
  }
}

var myObject = Object.create( anotherObject );
myObject.a = 2;
console.log(anotherObject);
console.log(myObject); */

/* ------------------------------------------------------ */
/* consctructor call */
/* By calling Foo(..) with new in front of it, we've constructed a new object and set that new object as the this for the call of Foo(..).  */

/* function Foo(name) {
	this.name = name;
}

Foo.prototype.constructor === Foo; // true

var a = new Foo('Eve');
console.log(a); */

/* ------------------------------------------------------ */
/* method call*/

/* function Foo(name) {
	this.name = name;
}

Foo.prototype.myName = function() {
	return this.name;
};

var a = new Foo( "a" );
var b = new Foo( "b" );

a.myName(); // "a"
b.myName(); */
