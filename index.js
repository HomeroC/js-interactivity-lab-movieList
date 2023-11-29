
let message = document.querySelector('#message')


const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input') 
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    document.addEventListener('click', crossOffMovie)

    movieTitle.textContent = inputField.value

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    let list = document.querySelector("ul");
    list.appendChild(movie);
    inputField.value =''


} 

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
} 

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked') === true){
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back!'
    }

}

document.querySelector('form').addEventListener('submit', addMovie)

