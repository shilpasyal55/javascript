// Ways to convert Set into Array

let myset = new Set([2,3,4]);
console.log(myset);

//Using Array.from()

let ar = Array.from(myset);
console.log(ar);

//Using spread operator

let ar2 = [...myset];
console.log(ar2);