
let o = {
    print: word => console.log(word,this),
    printer: function ( word ){
        console.log(word,this);
    }
}

o.print('firstOne');
o.printer('secondOne');

let print = o.print;
let printer = o.printer;

print('firstOne');
printer('secondOne');

// this is what happens when you call a function
function name ( a, b, c ){
    console.log(a,b,c,this);
}

o.name = name; // lives on an object as well now

// internally the function looks somehow like this
function real$name$function ( arguments$ ){
    let this$ = arguments$[0];
    let a     = arguments$[1];
    let b     = arguments$[2];
    let c     = arguments$[3];
    console.log(a,b,c,this$);
}


// in global scope (implicit behaviour)
name(1,2,3);
// js would do something like this
let arguments$ = [ window, 1, 2, 3 ];
real$name$function( arguments$ );


// in object scope (implicit behaviour)
o.name(1,2,3);
// js would do something like this
arguments$ = [ o, 1, 2, 3 ];
real$name$function( arguments$ );


// with apply
// i choose 'o' to be 'this' instead of window
name.apply(o,[1,2,3]);
// js would do something like this
arguments$ = [ o, 1, 2, 3 ];
real$name$function( arguments$ );


// with call
name.call(o,1,2,3);
// js would do something like this
arguments$ = [ o, 1, 2, 3 ];
real$name$function( arguments$ );


// with bind, we glue this and parameters
// into the function
let boundName = name.bind( window, 1, 2, 3 );
boundName() // 1,2,3,{window}

// what really happens
let real$bound$name = function () {
    let this$ = window;
    let a     = 1;
    let b     = 2;
    let c     = 3;
    name.call(this$,1,2,3);
}
real$bound$name()

// bind can be written ourselves
function myBind ( func, this$, a, b, c ) {
    function boundFunction (){
        func.call(this$,a,b,c);
    };
    return boundFunction;
}

// Intro in DOM

// Classes and inheritance