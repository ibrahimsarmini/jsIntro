
console.log(`
███████╗██╗  ██╗     ██╗
██╔════╝╚██╗██╔╝    ███║
█████╗   ╚███╔╝     ╚██║
██╔══╝   ██╔██╗      ██║
███████╗██╔╝ ██╗     ██║
╚══════╝╚═╝  ╚═╝     ╚═╝
`);

// *
// * *
// * * *
// * * * *

for ( let i = 4; i < 10; i++ ) {
// this outer loop controls how many stars i want
// to draw in the inner loop
//  => i := 1 - 4 [stars]
//  i is the actual number of stars that will be drawn

  // string starts out with an empty string
  // the inner loop will add stars to it
  let string = "";

  //               vvvvv does the trick
  for ( let j = 0; j < i; j++ ) {
    // in the inner loop
    // i add a star for each iteration
    string += "* ";
  }

  // when the inner loop is done
  // i'll have as may stars in {string}
  // as {i} demands
  console.log(string);
}


for (
  let str = "*";  // do this at the beginning
  str.length < 5; // check this every iteration
  str += "* "     // do this after each iteration
) console.log(str);

console.log(`
███████╗██╗  ██╗    ██████╗ 
██╔════╝╚██╗██╔╝    ╚════██╗
█████╗   ╚███╔╝      █████╔╝
██╔══╝   ██╔██╗     ██╔═══╝ 
███████╗██╔╝ ██╗    ███████╗
╚══════╝╚═╝  ╚═╝    ╚══════╝
`);

// Exercise 2

// [row] [column]
// arr[4][3] => 7

let arr = [
  [1,  2,  1, 24],
  [8, 11,  9,  4],
  [7,  0,  7, 27],
  [7,  4, 28, 14],
  [3, 10, 26,  7]
];

for (
  let row = 0;
  row < arr.length;
  row++
) {
  
  // get the current row from arr int rowArr
  const rowArr = arr[row];

  console.log(`row ${row}`);

  for (
    let column = 0;
    column < rowArr.length;
    column++
  ) {
    // print the current value from rowArr
    console.log(`  ${rowArr[column]}`);
  }

}

console.log(`
███████╗██╗  ██╗    ██████╗ 
██╔════╝╚██╗██╔╝    ╚════██╗
█████╗   ╚███╔╝      █████╔╝
██╔══╝   ██╔██╗      ╚═══██╗
███████╗██╔╝ ██╗    ██████╔╝
╚══════╝╚═╝  ╚═╝    ╚═════╝ 
`);

let repeat = '';

for (let i = 1; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    repeat += ' ' + i;
  }
}

// add a new line to the string
repeat += '\n'; // \n means new line

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    repeat += j + ' ';
  }
}

// use trim to cut away all spaces
// from the left and right side of our string
//   '  asdsd   '.trim() => 'asdsd'

console.log( repeat.trim() );
