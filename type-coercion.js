//String and Number
//Every “+” expression that involves a string 
//will result in a string
console.log("15" + 16)
console.log(20 + "0")
// “+” operator will concatenate two or more arrays
let arr1 = ["angular","react,"]
let arr2 = ["javascript","vue"]
console.log(arr1 + arr2)

// "-" is only used with number.Values will be cast to numbers
console.log("12" - 7)
console.log("30" - "javascript")
//"-" operator doesnot work on string arrays
console.log(arr1 - arr2)
console.log([4] - [2])

//Boolean
//true will convert to 1 and false will convert to 0,
//when added to number
console.log(2 + true)
console.log(25 * false);
console.log("js" + true);

//Equality
// "==" compares values without checking types
// and "===" compares both values and types
console.log("12" == 12)
console.log("12" === 12)


