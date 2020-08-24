// lets say we have 2 objects
// with compatible properties
let ball = {
    x: 0, // << compatible
    y: 0, // << compatible
    moveX: 0,
    moveY: 0
}
let paddle = {
    x: 0, // << compatible
    y: 0, // << compatible
    moveX: 0
}
// we can write a functoion that deals with both
// objects BECAUSE they have compatible properties
function moveX ( o ){
    o.x += 10; // << use compatibility here
}
// we just need to pass a compatible object
// as a parameter into the function
moveX( ball );
moveX( paddle );