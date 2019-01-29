var tmp = "new var tmp variable";
var tmp = "second var variable"; // No Error

let temp = "new let variable";
//let temp = "second let variable"; ​//SyntaxError: Identifier 'temp' has already been declared​​

function test(num) {
   if(num > 3) {
       var varVariable = "var inside if block";
       let letVariable = "let inside if block";
   }
   console.log(varVariable);
//    console.log(letVariable);
   //because let has block scope and only accessible inside that block
   // var varibale has functional scope
}

test(5);

function testHoisting() {
    console.log(varVariable); //undefined
    // console.log(letVariable); //it will throw error
    var varVariable = 1;
    let letVariable = 4;
}
// variable defined with var are hoisted means javascript engine declare all var variables 
// at the top of functional scope thast why when we console their value is undefined
// let variables are not hoisted therefore it throws error when we try to access it before 
// declaration
testHoisting();

