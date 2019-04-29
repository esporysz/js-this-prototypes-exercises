/* EX 4 THIS: NEW BINDING */

/* ------------------------------------------------------------------------- */
/* new binding */

function foo(a) {
  this.a = a;
  this.f = function() {
    console.log(a);
  }
}

var bar1 = new foo(1);
var bar2 = new foo(2);
console.log( bar1.a ); 
bar1.f();
console.log( bar2.a ); 