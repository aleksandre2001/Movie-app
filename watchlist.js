import { Movie } from "./data.js";

const movieList = document.querySelector("#movies-wrapper")

document.addEventListener("click", handleClick)

function handleClick(event) {
    if(event.target.dataset.id) {
        removeMovie(event.target.dataset.id)
        console.log(event.target.dataset.id)
        renderMovieList()
    }
}

function renderMovieList() {
    if(localStorage.length === 0) {
        movieList.innerHTML =  `<div class="empty-watchlist">
            
                                    <h2 id="defaultText" >Your watchlist is looking a little empty...</>
                                    <p><a href="index.html" >Let’s add some movies!</a><p>
                                </div>
                                `
    } else {            
        movieList.innerHTML = ""

        Object.keys(localStorage).forEach(key =>  {
            const movie = new Movie(JSON.parse(localStorage.getItem(key)))

            movieList.innerHTML += movie.getHtml()
    
            const div = document.getElementById(`add-${movie.getKey()}`)
            div.innerHTML =    `<i class="fa-regular fa-square-minus" data-id="${movie.getKey()}"></i>
                                <p class="watchlist" data-id="${movie.getKey()}">Remove</p>`
            div.style.cursor = "pointer"
            // div.style.border = "1px solid red"
            div.style.display = "flex"
            div.style.gap = "5px"
            div.style.alignItems = " center"
        })
    }    
}

function removeMovie(id) {
    for (const key of Object.keys(localStorage)) {
        if(key === id) {            
            localStorage.removeItem(id)
            break
        }
    }
}

renderMovieList()