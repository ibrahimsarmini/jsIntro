
// console.log => gets an unknown number of arguments

function printSomething (
    p1, p2, p3, p4, p5, p6, p7, p8
){
    console.log(
        p1, p2, p3, p4, p5, p6, p7, p8
    );
}

printSomething(
    'hello','this','is','a','test'
);

// we can use a spread operator to catch all parameters


function printSomething1 (...params){
    //                    ^^^ spread operator
    console.log('without spread', params);
    console.log(...params);
    //          ^^^ spread operator
    console.log.apply(null,params);
}

printSomething1(
    'hello','this','is','a','test'
);

function add (...numbers){
    // numbers is a normal array
    //   you can use it just like any other array
    //   numbers[0]
    //   numbers.pop()
    //   numbers.push(123)
    let [first] = numbers;
    console.log(
        numbers.reduce(
            (sum,value) => sum + value
        )
    )
}

add(1,2,3,4,5,6,8);