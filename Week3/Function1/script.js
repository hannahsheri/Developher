//Functions - Exercise 1
//getAreaOfCircle
function getAreaOfCircle(radius) {
    return Math.PI*radius*radius;
}
var area = getAreaOfCircle(10);
console.log(getAreaOfCircle(area));

//getCircumferenceOfCircle
function getCircumferenceOfCircle(radius) {
    return 2*Math.PI*radius;
}
const circumference = getCircumferenceOfCircle(10);
console.log(getCircumferenceOfCircle(circumference));

//getAreaOfSquare
function getAreaOfSquare(side) {
    return side*side;
}
var area = getAreaOfSquare(10);
console.log(getAreaOfSquare(area));

//getAreaOfTriangle
function getAreaOfTriangle(base, height) {
    return  (base * height) / 2;
}
console.log(getAreaOfTriangle(10, 5));