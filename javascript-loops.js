//Traditional For Loop
const arr = ["Javascript","Angular","React","Nodejs"]

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//For Of Loop
for(let elem of arr) {
    console.log(elem);
}

//ForEach Loop
arr.forEach(elem => { console.log(elem) });