/* EX 6 THIS: CLOSURE AND INNER FUNCION */

/* ------------------------------------------------------------------------- */
/* this inside closure */

/* var obj = {
  a: "a",
  f: function(){
    var closure = function(){
      console.log(this.a);
    };
    return closure();
  }
};

obj.f() */

/* ------------------------------------------------------------------------- */
/* fixing this inside closure */
/* var obj = {
  a: "a",
  f: function(){
    var self = this;
    var closure = function(){
      console.log(self.a);
    };
    return closure();
  }
};

obj.f() */

/* ------------------------------------------------------------------------- */
/* more elegant fix */
/* var obj = {
  a: "a",
  f: function(){
    var closure = () => {
      console.log(this.a);
    };
    return closure();
  }
};

obj.f() */