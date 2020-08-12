
// 1.1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
// Print true if either of them are in the range.
var x = + prompt('give a number');
var y = 55;

var xIsBiggerThan50 = x >= 50;
var xIsLessThan99   = x <= 99;

if ( xIsBiggerThan50 && xIsLessThan99 ){
  console.log('true');
}

else if ( y < 50 && y > 50 ){
  console.log('true');
}

else {
  console.log('false');
}

// 1.2. Check if three given integer values are in the range 50 to 99 (inclusive).
// Print true if one or more of them are in the range.
var first  = + prompt('the first number please');
var second = + prompt('the second number please');
var third  = + prompt('the third number please');

if ( first >= 50 && first <= 99 ){
    console.log( true );
}

else if ( second >= 50 && second <= 99 ){
    console.log( true );
}

else if ( third >= 50 && third <= 99 ){
    console.log( true );
}

else {
    console.log( true );
}

// OR:

console.log (
    ( first  >= 50 && first  <= 99 ) ||
    ( second >= 50 && second <= 99 ) ||
    ( third  >= 50 && third  <= 99 )
);

// 1.3. Declare the variables a, b and c, and give them number values.
//  Check which one out of the three variables has the largest value and print it to the console.
//  Then change the values of the variables to see if your conditional still works.

var a = + prompt('the a number please');
var b = + prompt('the b number please');
var c = + prompt('the c number please');

if ( a > b && a > c ){
    console.log(a);
}

else if ( b > a && b > c ){
    console.log(b);
}

else if ( c > a && c > b ){
    console.log(third);
} 

// 1.4. Calculate the sum of the two integers.
// If the sum is in the range 50 to 80, print 65, otherwise print 80.

var first  = 12;
var second = 24;
var theSum = first + second;

if ( theSum > 50 && theSum < 80 ){
    console.log(65);
} else {
    console.log(80);
}

// 1.5. Check whether the sum of two integers is 8,
// or whether their difference is 8.
// If one of these is the case, print true.
var first         = 12;
var second        = 24;
var theSum        = first + second;
var theDifference = second - first;

if ( theSum === 8 ){
    console.log(true);
}

else if ( theDifference === 8 ){
    console.log(true);    
}

// if ( theSum === 8 || theDifference ===8 ) { console.log(true) }
// console.log( theSum === 8 || theDifference === 8 )

// 1.6. Check whether either one of two integers is 15,
// or if their sum is 15.
// If one of these is the case, print true
var first  = 12;
var second = 24;

if ( first === 15 ){
    console.log(true);
}

else if ( second === 15){
    console.log(true);
}

else if ( first + second === 15 ){
    console.log(true);
}

// 1.7. Calculate the sum of the two given integers.
// If the two values are the same, then print triple their sum.
var first  = 12;
var second = 24;
var theSum = first + second;

if ( first === second ){
    console.log( theSum * 3 );
}

// 1.8. Calculate the difference between a specified number and 19.
var theNumber = 12;

// Print double the difference if the specified number is greater than 19.
if ( theNumber > 19 ){
    var theDifference = 12 - 19;
    console.log( theDifference * 2 );
}





// 2.1. read 2 strings using the prompt method into 2 variables.
var first  = prompt('give the first string');
var second = prompt('give the second string');
// then compare the 2 strings,
if ( first === second ){
    // if they are equal print true
    console.log(true);
} else {
    // if not print false
}

// 2.2. choose 2 numbers.

var first  = 23;
var second = 42;

// multiply the first number by 2
var multipied = first * 2;

// if the result is bigger than the second number print true
if ( multiplied > second ){
    console.log(true)
}

// else print false.
else {
    console.log(false);
}

// 2.3. read a number with the prompt method
var first = prompt('give a number');

// convert it into a number first!
first = Number(first);

// then add 5 to the number.
first = first + 5; // first += 5;

// if the result is bigger than 99 print "big",
if ( first > 99 ){
    console.log('big');
}

// if it is smaller than 10 print "small"
else if ( first < 10 ){
    console.log('small');
}

// else print "normal"
else {
    console.log('normal');
}

// 2.4. take a random string,
var randomString = 'coding';

// add "isgreat" to the end of the string.
var randomStringPlusIsGreat = randomString + 'isgreat';

// if the result is equal to "codingisgreat" print "thats a fact",
if ( randomStringPlusIsGreat === 'codingisgreat' ){
    console.log('thats a fact');
}

// else print "you should code more"
else {
    console.log('you shoud code more!!!!!!!!')
}

// 2.5. print the smallest number out of 2 numbers (choose randomly)
var first  = + prompt('the first number please');
var second = + prompt('the second number please');

if ( first < second ){
    console.log(first);
}

else if ( second < first ){
    console.log(second);
}

else {
    console.log('they are equal');
}

// console.log( Math.min( first, second) );


// 2.6. print the biggest number out of 2 numbers (choose randomly)
var first  = + prompt('the first number please');
var second = + prompt('the second number please');

if ( first > second ){
    console.log(first);
}

else if ( second > first ){
    console.log(second);
}

else {
    console.log('they are equal');
}

// console.log( Math.max( first, second) );

// 2.7. print the smallest number out of 3 numbers (choose randomly)
var first  = + prompt('the first number please');
var second = + prompt('the second number please');
var third  = + prompt('the third number please');

if ( first < second && first < third ){
    console.log(first);
}

else if ( second < first && second < third ){
    console.log(second);
}

else if ( third < first && third < second ){
    console.log(third);
}

// console.log( Math.min( Math.min( first, second), third ) );
// console.log( Math.min( first, second, third ) );

// 2.8. print the biggest number out of 3 numbers (choose randomly)
var first  = + prompt('the first number please');
var second = + prompt('the second number please');
var third  = + prompt('the third number please');

if ( first > second && first > third ){
    console.log(first);
}

else if ( second > first && second > third ){
    console.log(second);
}

else if ( third > first && third > second ){
    console.log(third);
}

// console.log( Math.max( Math.max( first, second), third ) );
// console.log( Math.max( first, second, third ) );

// 2.9. prompt for a number.
var first = + prompt('give a number');

// if this number is equal to 12,
if ( first === 12 ){
    // prompt for a second number
    var second = parseInt( prompt('give another number') );
    // add the two numbers.
    var added = first + second;
    // and print the result
    console.log(added);
    // console.log( first + second )
}

//  if the first number is bigger than 12 print it.
else if ( first > 12 ){
    console.log(12);
}

// if the first number is smaller than 12 print "to small :D"
else {
    console.log('too small :D');
}




// there is a function called isNaN(someVariable),
// it checks if the variable isNotANumber.
// read something with prompt.
// use the isNaN function to check if it's a number and print either "number" or "string"

var theNumber = Number( prompt('give a number') );

if ( isNaN(theNumber) ){
    console.log('string');
} else {
    console.log('number');
}

/* The other way around
if ( ! isNaN(theNumber) ){
    console.log('number');
} else {
    console.log('string');
}
*/