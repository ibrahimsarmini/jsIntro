
// Print the square root of the first parameter

function squareRoot ( number ){
    console.log( Math.sqrt(number) );
}

// Print the second power of the sum of the two parameters

function secondPowerOfSum ( number1, number2 ){
    console.log( ( number1 + number2 ) ** 2 );
}

// Add Questionmark to the String

let addQuestionmarkToString = string => string + '?';

// Calculate the volume of a Cube

let volume = side => side ** 3;

// Make the number negative

let negativeNumber = number => Math.abs(number) * -1

// Take an array of strings as parameter,
// print out the longest one

var names = ['a','aa','you win, have a nice break','b','bb'];
var otherNames = ['sda','sdaa','bassdds1','bassdds2'];

function longestString ( array ){
    let longestStringSoFar = '';

    function compareStringLength ( theCurrentString ){
        if ( theCurrentString.length > longestStringSoFar.length ){
            longestStringSoFar = theCurrentString;
        }
    }

    array.forEach( compareStringLength );
    console.log(longestStringSoFar);
}

longestString(names);
longestString(otherNames);

// alernative using reduce

let longest = names.reduce(getLongestString, "");

console.log( longest );

function getLongestString( longestStringSoFar, currentArrayElement ) {
  if ( currentArrayElement.length > longestStringSoFar.length ){
      return currentArrayElement;
  } else {
      return longestStringSoFar;
  }
}

// Print the lowest number in an array

var numbers = [1,2,3,4,5];

var lowestNumber = Infinity;

function getLowestNumber ( number ){
    if ( number < lowestNumber ){
        lowestNumber = number;
    }
}

numbers.forEach( getLowestNumber );

console.log(lowestNumber);

