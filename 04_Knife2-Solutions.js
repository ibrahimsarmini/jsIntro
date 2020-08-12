
console.log(`
███████╗██╗   ██╗███╗   ███╗ ██████╗ ███████╗███╗   ██╗██╗   ██╗███╗   ███╗██████╗ ███████╗██████╗ ███████╗
██╔════╝██║   ██║████╗ ████║██╔═══██╗██╔════╝████╗  ██║██║   ██║████╗ ████║██╔══██╗██╔════╝██╔══██╗██╔════╝
███████╗██║   ██║██╔████╔██║██║   ██║█████╗  ██╔██╗ ██║██║   ██║██╔████╔██║██████╔╝█████╗  ██████╔╝███████╗
╚════██║██║   ██║██║╚██╔╝██║██║   ██║██╔══╝  ██║╚██╗██║██║   ██║██║╚██╔╝██║██╔══██╗██╔══╝  ██╔══██╗╚════██║
███████║╚██████╔╝██║ ╚═╝ ██║╚██████╔╝██║     ██║ ╚████║╚██████╔╝██║ ╚═╝ ██║██████╔╝███████╗██║  ██║███████║
╚══════╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝
`);

let numbers = [1,2,3];

let sum1     = 0;
let product1 = 1; // take 1 as starting value
                  // if I choose 0 the result would be 0
                  // because 0 * 1 * 2 * 3 == 0  << wrong
                  //         1 * 1 * 2 * 3 == 6
                  //         2 * 1 * 2 * 3 == 12 << wrong


for ( let i = 0; i < numbers.length; i++ ) {
    const value = numbers[i]; // Cache Everything / DRY
    sum1     += value;
    product1 *= value;
}

console.log('loop    sumOfNumbers:', sum1);
console.log('loop prductOfNumbers:', product1);

// forEach version

let sum2     = 0;
let product2 = 1; // take 1 as starting value
                  // if I choose 0 the result would be 0
                  // because 0 * 1 * 2 * 3 == 0  << wrong
                  //         1 * 1 * 2 * 3 == 6
                  //         2 * 1 * 2 * 3 == 12 << wrong

function calcualteResults( value ){
    sum2     += value;
    product2 *= value;
}

numbers.forEach( calcualteResults );

console.log('forEach    sumOfNumbers:', sum2);
console.log('forEach prductOfNumbers:', product2);

// short version using reduce

let sum3 = numbers.reduce (
    ( sum, value )=> sum + value,
    0 // starting value for sum
);

let product3 = numbers.reduce (
    ( product, value )=> { return product * value },
    1 // starting value for product
      // could be left out
      // reduce will just take the first value of the array
);

console.log( 'reduce  sumOfNumbers:', sum3);
console.log( 'product sumOfNumbers:', product3);

console.log(`
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝                                 
`)

let friends = ['anx','lea','fly','in0de','flo'];

friends.forEach(
    function ( name, index ) {
        console.log(`Hello ${name}!`);
        console.log(`=> ${name} is at index ${index}`);
    }
);

// or: console.log('Hello ' +  name + '!');
// or: console.log('=> ' + name + ' is at index ' + index);

console.log(`
 ██████╗██╗████████╗██╗   ██╗███╗   ██╗ █████╗ ███╗   ███╗███████╗███████╗
██╔════╝██║╚══██╔══╝╚██╗ ██╔╝████╗  ██║██╔══██╗████╗ ████║██╔════╝██╔════╝
██║     ██║   ██║    ╚████╔╝ ██╔██╗ ██║███████║██╔████╔██║█████╗  ███████╗
██║     ██║   ██║     ╚██╔╝  ██║╚██╗██║██╔══██║██║╚██╔╝██║██╔══╝  ╚════██║
╚██████╗██║   ██║      ██║   ██║ ╚████║██║  ██║██║ ╚═╝ ██║███████╗███████║
 ╚═════╝╚═╝   ╚═╝      ╚═╝   ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝                                                                       
`);

let cities = ['Paris','London','Tokyo','Düsseldorf'];

let allCities = cities[0]; // Take the first element as
                           // start value
                           // and skip the first element
                           // in the for loop
for (let i = 1; i < cities.length; i++) {
    allCities += ', ' + cities[i];
}

console.log('using loop:', allCities);

// golf solution using join
console.log('using join:', cities.join(', '));

console.log(`
███████╗██╗   ██╗███████╗███╗   ██╗     ██████╗ ██████╗ ██████╗ 
██╔════╝██║   ██║██╔════╝████╗  ██║    ██╔═══██╗██╔══██╗██╔══██╗
█████╗  ██║   ██║█████╗  ██╔██╗ ██║    ██║   ██║██║  ██║██║  ██║
██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║    ██║   ██║██║  ██║██║  ██║
███████╗ ╚████╔╝ ███████╗██║ ╚████║    ╚██████╔╝██████╔╝██████╔╝
╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝     ╚═════╝ ╚═════╝ ╚═════╝                                                              
`);

// google: js even odd number
//
//       odd numbers: 1, 3, 5, 7, etc.
//      even numbers: 2, 4, 6, 8, etc.
//   modulo operation (remainder)
//      5 % 3 === 2 <<<  odd number
//     10 % 3 === 1 <<<  odd number
//      4 % 2 === 0 <<< even number
//

let evenOddNumbers = [4,6,2,5,7,3,1];

let evenOddResult = evenOddNumbers.map(
    function ( value ) {
        if ( value % 2 === 0 ) {
            // the value modulo 2 has no remainder
            // this is an even number
            return value - 1;
        } else {
            // this must be odd if its not even
            return value + 1;
        }
    }
);

console.log('           using map, function, if:', evenOddResult);

// golf version using arrow and ternary

let evenOddResult2 = evenOddNumbers.map(
    ( value )=> value % 2 == 0 ? value - 1 : value + 1
);

console.log('using map, arrow function, ternary:', evenOddResult2);

// with a for loop

let evenOddResult3 = [];

for (let i = 0; i < evenOddNumbers.length; i++) {
    const value = evenOddNumbers[i];
    evenOddResult3[i] = ( value % 2 == 0 ) ? ( value - 1 ) : ( value + 1 );
}

console.log('               using loop, ternary:', evenOddResult3);

console.log(`
 ██████╗ █████╗ ██████╗ ██╗████████╗ █████╗ ██╗     ██╗███████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██╔══██╗██╔══██╗██║╚══██╔══╝██╔══██╗██║     ██║╚══███╔╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║     ███████║██████╔╝██║   ██║   ███████║██║     ██║  ███╔╝ ███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║     ██╔══██║██╔═══╝ ██║   ██║   ██╔══██║██║     ██║ ███╔╝  ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
╚██████╗██║  ██║██║     ██║   ██║   ██║  ██║███████╗██║███████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝╚═╝  ╚═╝╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝                                                                                                   
`);

let names = ['aNton','DanYlo','DANIel','GleNN','ibRAHIM','Juan','MaDhumitha','nISHa','raSeL','SamUel'];

// .toLowerCase()     - 'ASDD' => 'asdd'
// .toUpperCase()     - 'asdd' => 'ASDD'
// Get the first character:
//   ("asdd")[0]        - 'a'          - for strings and arrays
//   ("asdd").charAt(0) - 'a'          - only strings
// Get the rest of the string:
//   ("asdd").slice(1)  - 'sdd'        - for strings and arrays
//   ("asdd").substring(1)             - only strings
//   ("asdd").substr(1)    << dinosaur - only strings
//      --- substring(1);
//      --  substring(1,3); - 'sd'
//      --  slice(1,3);     - 'sd'

let capitalizedNames = names.map(
    function ( name ){
        const capitalizedFirstLetter = name.charAt(0).toUpperCase();
        const lowercaseRestOfTheName = name.substring(1).toLowerCase();
        return capitalizedFirstLetter + lowercaseRestOfTheName;
    }
);

let capitalizedNames2 = names.map(
    function ( name ){
        let capitalizedFirstLetter = name.charAt(0);
            capitalizedFirstLetter = capitalizedFirstLetter.toUpperCase();
        let lowercaseRestOfTheName = name.substring(1);
            lowercaseRestOfTheName = lowercaseRestOfTheName.toLowerCase();
        return capitalizedFirstLetter + lowercaseRestOfTheName;
    }
);

console.log( '     chained:', capitalizedNames .join(', ')  );
console.log( 'step by step:', capitalizedNames2.join(', ') );

console.log(`
██████╗ ██╗   ██╗██████╗ ██╗     ██╗ ██████╗ █████╗ ████████╗███████╗███████╗
██╔══██╗██║   ██║██╔══██╗██║     ██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝██╔════╝
██║  ██║██║   ██║██████╔╝██║     ██║██║     ███████║   ██║   █████╗  ███████╗
██║  ██║██║   ██║██╔═══╝ ██║     ██║██║     ██╔══██║   ██║   ██╔══╝  ╚════██║
██████╔╝╚██████╔╝██║     ███████╗██║╚██████╗██║  ██║   ██║   ███████╗███████║
╚═════╝  ╚═════╝ ╚═╝     ╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝                                                                          
`);

let duplicates   = [1,1,3,3,4,4,4,4,7];
let noDuplicates = [];

// idea: figure out a way to not a number to noDuplicates twice
//   Array.prototype.includes(value)      - does an array include a certain value?
//   Array.prototype.indexOf(value) == -1 - does an array include a certain value?

duplicates.forEach( value => {
    //   noDuplicates.includes(value) := is value already part of noDuplicates
    // ! noDuplicates.includes(value) := is value not yet part of noDuplicates

    // if NOT noDuplicates includes value
    // => if noDuplicates does not include value
    if ( ! noDuplicates.includes(value) ){
        // then add it to noDuplicates
        noDuplicates.push(value);
    }
});

console.log(noDuplicates);

console.log(`
██████╗ ███████╗██████╗ ███████╗ █████╗ ████████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝
██████╔╝█████╗  ██████╔╝█████╗  ███████║   ██║   
██╔══██╗██╔══╝  ██╔═══╝ ██╔══╝  ██╔══██║   ██║   
██║  ██║███████╗██║     ███████╗██║  ██║   ██║   
╚═╝  ╚═╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝                                                 
`);

let item     = 'repeat';
let times    = 5;
let repeated = [];

// i := 0 1 2 3 4
for ( let i = 0; i < times; i++ ) {
    repeated[i] = item;
    // or: repeated.push(item);
}

console.log('with loop:', repeated);

// golf method: Array.prototype.fill()

console.log('with fill:', ( new Array(times) ).fill(item) );