const constant = 1;

function localScope1(){
    const constant = 2;
    console.log(constant);

    function localScope2(){
        const constant = 3;
        console.log(constant);
    }

    localScope2();
}

var variable1  = 1;
variable1      = 2;

let letriable1 = 1;
letriable1     = 2;

localScope1();