var variable = 1;
var variable = 2;

function localScope1(){
    let variable = 2;
    console.log(variable);

    function localScope2(){
        let variable = 3;
        console.log(variable);
    }

    localScope2();
}

localScope1();