// thing i use daily:

document.onmousemove = ({clientX,clientY})=>
    console.log(clientX,clientY)

document.onkeydown = ({code,keyCode})=>
    console.log(code,keyCode);

let arr = ['red','green','yellow'];

// declare variables but without values
let primaryColor, secondaryColor;

// we could read the values from the array like this
primaryColor   = arr[0];
secondaryColor = arr[1];

// declare variables but without values
let primary, secondary; // == undefined

// read elements of the array into variables
( [ primary, secondary ] = arr );

console.log(primary,secondary);
