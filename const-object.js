/*  Making Object constant in Javascript */

// Although we declare object as constant, then also we can change the properties of it

const person = {
    name: "shilpa",
    age: 25,
    job: "developer"
}

person.name = "syal"
console.log(person) // {name: 'syal',age:25, job: 'developer'}

//But you cannot replace the entire object
person = { marks: 80 } //Throws Error

/* If you dont want to change the properties,
then freeze the object using Object.freeze() method */

const newperson = Object.freeze(person)
newperson.name = "xyz" //no effect on the name property