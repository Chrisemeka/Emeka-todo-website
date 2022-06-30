const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')
const mode = document.querySelector('.light')
const moon = document.querySelector('.mode')
const body = document.querySelector('.bodyClass')
const images = document.querySelector('.images')


// create todo

const todoTemplate = inputText => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputText}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    list.innerHTML += html;
}


addTodo.addEventListener('submit', e =>{

    e.preventDefault();
    const inputText = addTodo.input.value.trim();
    todoTemplate(inputText);
    addTodo.reset();
    
})

// delete todo

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})


// search for todo

const searchTodos = (term) => {
    Array.from(list.children)
        .filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))
}


search.addEventListener('keyup', () => {
    const searchTerm = search.value.toLowerCase().trim();
    searchTodos(searchTerm);
})

// light mode 
let toggle = true

const toggleMode = () => {
    body.classList.toggle('dark')
}

images.addEventListener('click', () => {

    toggle = !toggle;
    if (toggle) {
        images.src = "./moon-solid.svg"
    }else{
        images.src = "./sun-solid.svg"
    }

    toggleMode();
})
