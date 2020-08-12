
let array = [1,2,3];
let otherNameForArray = array;
// otherNameForArray === array

let a = { test:array }
// we create clone of a at this point and just call it b
// a.test === array

let b = Object.assign({},a);
//// b = {}
//// b.test = a.test
//// b.test === a.test
// a = { test:[1,2,3] }
// b = { test:[1,2,3] }
// a != b they are clones

// the clone metaphor ends here