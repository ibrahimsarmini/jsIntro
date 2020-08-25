
let arr = ['red','green','yellow','white','pink'];

//             v normal comma
let [ , primary, ,, secondary ] = arr;
//    ^          ^^ skip values

console.log( primary, secondary );
