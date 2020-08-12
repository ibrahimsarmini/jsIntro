
function myReduce ( theArray, theReducer, initialValue ){
    var sum = initialValue;
    for ( let i = 0; i < theArray.length; i++ ){
        sum = theReducer( sum, theArray[i], i, theArray );
    }
    return sum;
}

function addCurrentGrade ( sum, value, index, array ){
        console.log( sum, value, index, array)
        return sum + value;
}

var classGrades = [2,1,3,4,4,6,1,3,3,1];
var totalGrades = myReduce( classGrades, addCurrentGrade, 0 );
var averageGrade = totalGrades / classGrades.length;

console.log(`This class has ${classGrades.length} students.`);
console.log(`This class has a average grade of ${averageGrade}.`);

