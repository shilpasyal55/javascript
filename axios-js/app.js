import axios from 'axios';
import 'babel-polyfill';
const BASE_URL = "https://jsonplaceholder.typicode.com/";


const form = document.querySelector('form');
const formEvent = form.addEventListener('submit',async event => {
    event.preventDefault();
    const title = document.querySelector('#new-todos__name').value;
    const userId = document.querySelector('#new-todos__userId').value;
    const todo = {
        title,
        userId
    }

    const addedTodo = await addTodo(todo);
    addTodoToDom(addedTodo); 
})

const addTodo = async (todo) => {
    try {
        const res = await axios.post(`${BASE_URL}todos`, todo);
        const addedTodo = res.data;
        console.log(`Added a new Todo!`, addedTodo);

        return addedTodo;
    } catch (error) {
        console.log('Error while adding todo', error);
    }
}

const getTodos = async () => {
    try {
        const res = await axios.get(`${BASE_URL}todos`);
        const todos = res.data;
        return todos;
    } catch (error) {
        console.log("Error",error);
    }
}

const createLi = item => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item.title));
    return li;
}

const addTodoToDom = todos => {
    const ul = document.querySelector("ul");
    if (Array.isArray(todos) && todos.length > 0) {
        todos.forEach( todo =>{
            ul.appendChild(createLi(todo))
        })
    } else {
        ul.appendChild(createLi(todos));
    }
}

const main = async  () => {
    addTodoToDom(await getTodos());
}

main();