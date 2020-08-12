
// ( 2+1+3+4+4+6+1+3 ) / 8

// This array contains a list of all our student's grades
var classGrades = [2,1,3,4,4,6,1,3,3,1];
// Every array has a function (method) called reduce
//   this function takes
//      - a function as parameter (reducer)
//      - and a number as optional parameter (initial Value)
var totalGrades = classGrades.reduce( addCurrentGrade, 0 );
// the reduce functione takes every element in the array
// and calls the reducer function 
function addCurrentGrade ( sum, value, index, array ){
        console.log( sum, value, index, array)
        return sum + value;
}

var averageGrade = totalGrades / classGrades.length;

console.log(`This class has ${classGrades.length} students.`);
console.log(`This class has a average grade of ${averageGrade}.`);


// for ( let i = 0; i < classGrades.length; i++ ){
//    totalGrades += classGrades[i];
// }

// totalGrades += classGrades[0];
// totalGrades += classGrades[1];
// totalGrades += classGrades[2];
// totalGrades += classGrades[3];
// totalGrades += classGrades[4];
// totalGrades += classGrades[5];
// totalGrades += classGrades[6];
// totalGrades += classGrades[7];
// totalGrades += classGrades[8];
// totalGrades += classGrades[9];


