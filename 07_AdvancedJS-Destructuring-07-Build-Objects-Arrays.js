
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5,6];
let arr3 = [4,5,6,...arr1];
let arr4 = [1,1,1,...arr1,1,1,1];
let arr5 = [1,1,1,arr1,1,1,1];

console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);

let o1 = { name: 'anx' };
let o2 = { age:  35 };
let o3 = { age:  36 };
let o4 = {
    ...o1,
    ...o2,
    ...o3
};

console.log( o4 );

// you can use this for shllow cloning
let o1clone   = { ...o1 };
let arr1clone = [ ...arr1 ];