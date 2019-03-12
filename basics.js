// in operator to check if property exists in object
var point = {x:2, y: 3};
console.log("x" in point); // true
console.log("z" in point); // false

//In array specify index number
var arr = ["javascript","by","shilpa"];
console.log("javascript" in  arr); // false
console.log(2 in arr); //true

//Ways to create Objects in Javascript

//Using Object constructor
var obj = new Object();

//Using Object literal
var obj1 = {};

//Using Object.create with no Object prototype
var obj2 = Object.create(null);