
let addOne = theParameter => theParameter + 1;

console.log( addOne(22) );
console.log( addOne );

let doAddOne = addOne;

console.log( doAddOne(23) );
console.log( doAddOne() );
console.log( doAddOne );
