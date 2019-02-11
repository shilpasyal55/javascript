//const myPElements = document.querySelector('p')
//myPElements.textContent = "Hello Everyone i am changed"

const myPElements = document.querySelectorAll('p')
//myPElements.forEach(e => e.textContent = "I am changed using loop")

// const myNewPara = document.createElement('p')
// myNewPara.textContent = 'I was added <span> via js</span>  '
// document.querySelector('body').appendChild(myNewPara)

const newDiv = document.createElement('div')
const divText = document.createTextNode("This is div second");
newDiv.appendChild(divText)

let div1 = document.querySelector('#div1')
var paragraphs = document.getElementsByTagName("P");
console.log(paragraphs[1].nodeType)
document.body.insertBefore(newDiv,div1)