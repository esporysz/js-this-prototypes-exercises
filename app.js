/* EX 5 THIS: BINDING ORDER */

/* ------------------------------------------------------------------------- */
/* implicit binding vs explicit binding */
/* function foo() {
	console.log( this.a );
}

var obj1 = {
	a: 2,
	foo: foo
};

var obj2 = {
	a: 3,
	foo: foo
};

obj1.foo(); 
obj2.foo(); 

obj1.foo.call( obj2 );
obj2.foo.call( obj1 ); */

/* ------------------------------------------------------------------------- */
/* new binding vs explicit binding */
/* function foo(something) {
	this.a = something;
}

var obj1 = {
	foo: foo
};

var obj2 = {};

obj1.foo( 2 );
console.log( obj1.a );

obj1.foo.call( obj2, 3 );
console.log( obj2.a ); 

var bar = new obj1.foo( 4 );
console.log( obj1.a );
console.log( bar.a ); */

/* ------------------------------------------------------------------------- */
/* new binding vs hard binding */

/* function foo(something) {
	this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a );

var baz = new bar( 3 );
console.log( obj1.a ); 
console.log( baz.a ); */

/* ------------------------------------------------------------------------- */
/* ignored this - when you pass null to call/apply/bind method you have default binding*/  

/* function foo() {
	console.log( this.a );
}

global.a = 2;

foo.call( null ); */

/* ------------------------------------------------------------------------- */
/* ignored this - why do we need to pass null in call/apply/bind method*/  

/* function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}
foo.apply( null, [2, 3] );
var bar = foo.bind( null, 2 );
bar( 3 ); */

/* ------------------------------------------------------------------------- */
/* ignored this - safer way to pass null to call/apply/bind method */ 

/* function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}
var ø = Object.create( null );
foo.apply( ø, [2, 3] ); 
var bar = foo.bind( ø, 2 );
bar( 3 );  */
