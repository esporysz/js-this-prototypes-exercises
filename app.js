/* EX 1 THIS: DEFAULT BINDING */
/* ------------------------------------------------------------------------- */
/* implicit binding */
/* function foo() {
	console.log( this.a );
}

var obj1 = {
	a: 1,
	foo: foo
};

var obj2 = {
	a: 2,
	foo: foo
};

obj1.foo(); 
obj2.foo(); */

/* ------------------------------------------------------------------------- */
/* implicit binding nested objects */

/* function foo() {
	console.log( this.a );
}

var obj1 = {
	a: 1,
	foo: foo
};

var obj2 = {
	a: 2,
	obj: obj1
};

obj2.obj.foo(); */

/* ------------------------------------------------------------------------- */
/* lost binding */
/* function foo() {
	console.log( this.a );
}

var obj1 = {
	a: 1,
	foo: foo
};

var bar = obj1.foo;
bar(); */

/* ------------------------------------------------------------------------- */
/* lost binding - callback*/
/* function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	fn(); 
}

var obj = {
	a: 2,
	foo: foo
};

global.a = "oops, global";

doFoo( obj.foo ); */