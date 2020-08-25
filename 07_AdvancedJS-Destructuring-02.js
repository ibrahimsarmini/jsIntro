
let arr = ['red','green','yellow','white'];

// alternate version, destructure during decalration
let [ primary, secondary, ...others ] = arr;
//                        ^^^ collects all other values
//                            into a new array

console.log( primary, secondary, others );
