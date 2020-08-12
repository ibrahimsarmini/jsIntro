
// ForEach => Execute a provided function forEach element in an Array 

// Map     => Assigns new values to all elements of an Array (creates a new Array)

// Reduce  => Execute a provided function forEach element in an Array,
//            and return one single value 

// [ every number added up ] / [ count of numbers ]

// Why use those functions instead of Loops
//   - Easier to write
//   - Avoids errors
//   - Easy to modify
//   - concentrate on the real issues
//   - Might be faster
//   - avoids scope confusion
//       loops are like glass boxes both sides see each other
//       functions are like one way mirror boxes

var allGrades = [1,4,6,3,6,2,3,4,1,1];

var totalGrade = 0;

// for ( let i = 0; i < classGrades.length; i++ ){
allGrades.forEach(
    grade => totalGrade + grade
);

var averageGrade = totalGrade / allGrades.length;

console.log('average grade is ' + averageGrade );
