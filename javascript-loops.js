//Traditional For Loop
const arr = ["Javascript", "Angular", "React", "Nodejs"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//For Of Loop(will print all the values of keys)
for (let elem of arr) {
    console.log(elem);
}

//For In Loop (Will print all the keys)
for(let elem in arr) {
    console.log(elem);
}

//ForEach Loop
arr.forEach(elem => { console.log(elem) });

//Some Method will return true if atleast one element in array will match with condition
function someLanguageExist(name) {
    return arr.some(elem => elem == name)
}

console.log(someLanguageExist("Rails"));
console.log(someLanguageExist("Angular"));

//Every Method will only return true if all elements of the array satisfies the condition
let numbers = [8,1,6,3,5,2]
function everyCheck(number) {
    return numbers.every(elem => elem < number)
}

console.log(everyCheck(10));
console.log(everyCheck(7));


//Do While Loop
let i = 0;
do {
    console.log(arr[i])
    i++;
} while (i <= arr.length)

//While Loop
let z = 0;
while (z < 5) {
    console.log(z);
    z++;
}

