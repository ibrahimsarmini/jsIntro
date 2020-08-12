
// global scope
var globalA = 1;

console.log(globalA); // prints 1

////////////// v this is where the scope begins
function test(){
    // scope for function test
    var globalA = 2;
    console.log(globalA);
    }
/// ^ this is where the scope ends

test(); // prints 2
test();

console.log(globalA); // prints 1
