// Ways to Merge arrays in Javascript

let happy = ['😁','😂']
let sad = ['😓','😩']

//MERGE USING SPREAD OPERATOR
const emotions = [...happy, ...sad]
console.log(emotions) //  [ '😁', '😂', '😓', '😩' ]

//MERGE USING CONCAT METHOD
let newemotions = happy.concat(sad)
//or 
newemotions = [].concat(happy,sad)
console.log(newemotions) //  [ '😁', '😂', '😓', '😩' ]