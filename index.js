 
import { Movie } from './data.js';
let responseArr = []
let movieArr = []


const searchForm = document.getElementById('search-form')
const inputField = document.getElementById('input')


function handleClick (){
    
    fetch(`https://www.omdbapi.com/?s=${inputField.value}&apikey=1fb0a3cb`)
    .then(res => res.json())
    .then(data => {
        responseArr = data.Search
        if(data.Search){createMovieArr(responseArr)}
        console.log(movieArr)
        if(movieArr){render(movieArr)}

        const movies = data.map(movieData => new Movie(movieData.title, movieData.year, movieData.genre));
    })
    .catch(error => console.error(error));

    // function render(array){
    //     array.forEach(movie => {
    //         document.querySelector("#movies-wrapper").innerHTML += `
    //             <div class="movie">
    //                 <div class= "poster" style=" background-image: url("${movie.Poster})"; "></div>
    //                 <div class = "content"> 
    //                 <div class="title-data">
    //                 <span class="title">${movie.Title} </span>  
    //                 <span class="rating-data"> <img src="./images/star-icon.png"> 8.1</span>
    //             </div>
                
    //             <div class="about1">
    //                 <span> 117min</span>
    //                 <span>Animation, Adventure</span>
    //                 <span> 
    //                 <a href="#">
    //                     <button><img src="./images/plus-icon.png"/> Watchlist</button>
    //                 </a>
    //                 </span>
    //             </div>
    //             <div class="about2"><p>A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p></div>
    //             </div>
    //         </div>            
    //         `
    //     })
    // }

    //     
    // }
    // }

}

 function createMovieArr(arr){
      arr.forEach(movieData => {
          let movie = new Movie(movieData)
          // console.log(movieData)
          movieArr.push(movie)
      });
 }  

searchForm.addEventListener("submit", handleClick)
    



