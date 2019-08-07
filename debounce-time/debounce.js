let counter = 0;
const fetchData = () => {
    let ul = document.querySelector('ul');  
    let li = document.createElement('li');
    li.innerHTML = `Data Fetched ${counter++}`;
    ul.appendChild(li);
    console.log("Data Fetched" , counter);
}

const debounce = (callback,delay) => {
    let timer;
    return function() {
        clearTimeout(timer);    
        timer = setTimeout(() => {
            callback()
        }, delay);
    }
}


const getData = debounce(fetchData,400);


