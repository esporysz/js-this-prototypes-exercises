/* EX 3 THIS: EXPLICIT BINDING */

/* ------------------------------------------------------------------------- */
/* lost binding - fixing*/

/* function foo() {
	console.log( this.a );
}

var obj1 = {
	a: 1,
	foo: foo
};

obj1.foo.call(obj1); */

/* ------------------------------------------------------------------------- */
/* hard binding - callback */

/* function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); 
setTimeout( bar, 100 ); 
// when had binding it it is not possible to reassign context object
bar.call( global );
 */

 /* ------------------------------------------------------------------------- */
/* hard binding - callback */

/* function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); 
setTimeout( bar, 100 ); 
// when had binding it it is not possible to reassign context object
bar.call( global );
 */

/* ------------------------------------------------------------------------- */
/* hard binding with bind method */


/* function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = foo.bind(obj);

bar(); 
setTimeout( bar, 100 ); 
// when had binding it it is not possible to reassign context object
bar.call( global ); */

/* ------------------------------------------------------------------------- */
/* context or thisArg arguments */

/* function foo(el) {
	console.log( el, this.id );
}

var obj = {
	id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach(foo, obj) */