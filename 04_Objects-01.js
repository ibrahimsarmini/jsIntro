
// Objects collect multiple values just like arrays
//   actually arrays are a special type of object
//   but objects can have strings to find the values

// when you have            0,   1,   2,    3,  4
// in an array with values  'a', 'b', true, [], function(){}

let arr = [ 'a', 'b', true, [], function(){} ];
arr[0] // = 'a'
arr[3] // = []
arr[4] // = function(){}

// you could do something like this to remember where the function was
let theFunction = 4;
arr[theFunction]();
// but if you insert something at the beginning of the array
// indexes will shift, theFunction would have the wrong number

// thats why:
//   for an object you can have strings as indexes

function Fleischwurst(){
    console.log('hello from the outside world:',this);    
}

let object = {
    // key : value - pair
    'someValue': 'a',
    //^ must be a string
    someOtherValue:   123,
    //^ someOtherValue is turned into a string
    123:              '1234',
    //^ 123 is turned into a string
    someFunction:      function(){ console.log('hello0') },
    someOtherFunction: function Wurst(){ console.log('hello1') },
    someArrowFunction: $=> console.log('hello2'),
    someExternalFunction: Fleischwurst
};

object['someValue']   // = 'a'
object[123]           // = '1234'
object['123']         // = '1234'
object.someValue      // = 'a'
object.someOtherValue // = 123

object.someFunction();         // => hello0
object.someOtherFunction();    // => hello1
object.someArrowFunction();    // => hello2
object['someFunction']();      // => hello0
object['someOtherFunction'](); // => hello1
object['someArrowFunction'](); // => hello2

object.someExternalFunction() // => 'hello from the outside world:', {object}
Fleischwurst()                // => 'hello from the outside world:', {Window}

arr['map'] // would also work
// to use map but its too long
// so: arr.map === arr['map']

arr.map = true; // breaks most programs
// it repaces arr.map with true
// but map is a builtin function
// so you cannot use arr.map() anymore


// anonymous objects don't have a building plan
// you decide what goes into them
let obj1 = { value: 123 };
let obj2 = { value: 321 };

console.log(
    obj1.value,
    obj2.value
);

// but you can automate alot of
// the actual building of objects
// using classes

class ValueHolder {
    value = 0
}

let obj3 = new ValueHolder()

// this is a bit boring because the
// value will always be zero

// back in the jurassic period we created building plans
// by writing a functions that creates objects
// according to our specifications :DinosaurClasses:

function DinosaurMemory( theNewValue ){
    let    newObject = {};                // create a new empty object
           newObject.value = theNewValue; // set the value property
    return newObject;                     // return the new object
}

let dino1 = DinosaurMemory(1); 

// => { value: 1 }
// dino1.value    === 1
// dino1['value'] === 1

let dino2 = DinosaurMemory(2);
// => { value: 2 }
// dino2.value    === 2
// dino2['value'] === 2

dino1 == dino2; // => false

// the modern way to write those dinos
//   are Classes

class Memory {
    value = 0;
    constructor ( theNewValue ){
        this.value = theNewValue;
        this.otherValue = 123;
    }
    print () {
        console.log(this.value,this.otherValue);
    }
}

let obj4 = new Memory(3); obj4.print() // => 3, 123
let obj5 = new Memory(4); obj5.print() // => 4, 123

