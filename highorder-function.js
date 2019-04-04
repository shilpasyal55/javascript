//Here ManipulateArray function is treated as high order function as it takes
// another function as argument
//the function which is passed as argument is callback function
//addTen is callback function
//Highorder function and callback help us to write dry(dont repeat urself) code
//Examples of high order functions are map,filter,reduce etc
function ManipulateArray(input, instruction) {
    let output = [];

    for (let index = 0; index < input.length; index++) {
       output.push(instruction(input[index])) 
    }
    return output
}

function addTen(number) {
    return number + 10;
}

let result = ManipulateArray([10,20,30],addTen);
console.log(result);



