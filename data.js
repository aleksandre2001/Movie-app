export class Movie {
    constructor(data){
        Object.assign(this, data)
        
    }

    getHtml(){
        // console.log(`check  this ${this.Title}`)
         return `
        <div class="movie">
            <div class="poster" style=" background-image: url(${this.Poster})"></div>
           
            <div class = "content"> 
            <div class="title-data">
            <span class="title">${this.Title} </span>  
            <span class="rating-data"> <img src="./images/star-icon.png"> ${this.imdbRating}</span>
        </div>
        
        <div class="about1">
            <span> ${this.Runtime}</span>
            <span id="genre">${this.Genre}</span>

            <span> 
            <div class="addToList" id="add-${this.getKey()}" data-id="${this.imdbID}">
                                <i class="fa-regular fa-square-plus" data-id="${this.imdbID}"></i>
                                <p class="watchlist" data-id="${this.imdbID}">Watchlist</p>
                            </div>
            </span>
        </div>
        <div class="about2"><p>${this.Plot}</p></div>
        </div>
    </div>            
    `
    }
    
    getKey() {
        return this.imdbID
    }
}
