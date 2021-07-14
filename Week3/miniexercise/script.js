function logRectInfo (topLeft, bottomRight) {
    let length = Math.abs(topLeft[0] - bottomRight[0]);
    let width = Math.abs(topLeft[1] - bottomRight[1]);
    let area = length*width
    let perimeter = 2*length + 2*width;

    console.log(`The area of the rectangle is ${area}.`);
    console.log(`The perimeter of the rectangle is ${perimeter}.`)
    console.log();

    //let tempArrow = [area, perimeter];
    //return tempArray;
}

function acceptsArray(array1, array2) {
    console.log(array1);
    console.log(array2);
}

acceptsArray([1, 3, 5], [4, 7, 9])