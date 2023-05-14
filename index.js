 
import { Movie } from './data.js';

///GLOBAL variables 
const APIKEY = `1fb0a3cb`
let movies = []
let copyMovieArr = []

//-----DOM--------
const searchForm = document.getElementById('search-form')
const inputField = document.getElementById('input')
const searchedMovieList = document.getElementById('movies-wrapper')

// Set up event listeners for form submission <AAAA> and document click <BBBB>
searchForm.addEventListener("submit", handleClick)
document.addEventListener("click", addClick)


// <AAAA>
function handleClick (e){
    e.preventDefault()
    fetchRequest()
    inputField.value = ''
}

function fetchRequest(data){
    fetch(`https://www.omdbapi.com/?s=${inputField.value}&apikey=${APIKEY}`)
        .then(res => res.json())
        .then(data => {         
            if(data.Response === "True"){
                showEmptyMoviesList()
                fetchDetailedMovieData(data)
            }else showNoMoviesList()            
        })
}

function showEmptyMoviesList(){
    document.querySelector("#movies-wrapper").innerHTML = " "
}

function fetchDetailedMovieData(data){
    const length = data.Search.length < 10 ? data.Search.length : 10
    
    for (let i=0; i<length; i++ ){
        fetch(`https://www.omdbapi.com/?t=${data.Search[i].Title.trim().replaceAll(" ", "+")}&apikey=${APIKEY}`)
        .then(res => res.json())
        .then(data => {
            renderMovie(data)
        })
    }
}

function renderMovie(data){
    const newMovie = new Movie(data)
    if(!movies.find(movie => movie.Title === newMovie.Title) && newMovie.Poster !== "N/A") {
        movies.push(newMovie)
        document.querySelector("#movies-wrapper").innerHTML += newMovie.getHtml()
        if(localStorage.getItem(newMovie.getKey()) !== null) {
            let addDiv = document.getElementById(`add-${newMovie.getKey()}`)
            addDiv.innerHTML = "<p>Already saved!</p>"
            addDiv.style.cursor = "default"
        }
    }
}

function showNoMoviesList(){
    searchedMovieList.innerHTML = `<h1> oh sorry there is no something to show :( </h1>`
}


//  <BBBB>
//clicking on add watchlist Btn and function to add object in local storage
function addClick(event) {
     if(event.target.dataset.id) {
        addToWatchList(event.target.dataset.id)
    }
}
function addToWatchList(id) {
    localStorage.setItem(id, JSON.stringify(movies.find(movie => movie.imdbID === id)))
    let addDiv = document.getElementById(`add-${id}`)
    addDiv.innerText = "Added!"
    addDiv.style.cursor = "default"
}

