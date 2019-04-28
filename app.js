/* EX 1 THIS: DEFAULT BINDING */
/* ------------------------------------------------------------------------- */
/* default binding */

/* function f1(){
  var a = 5;
  console.log(this.a);
}

global.a = 2;

f1(); */

/* ------------------------------------------------------------------------- */
/* default binding and use strict 1 */

/* function f1(){
  'use strict';
  var a = 5;
  console.log(this.a);
}

global.a = 2;

f1(); */

/* ------------------------------------------------------------------------- */
/* default binding and use strict 2 */

 /* function f1(){
  
  var a = 5;
  console.log(this.a);
}

global.a = 2;

(function(){
  'use strict';
  f1();
})() */

