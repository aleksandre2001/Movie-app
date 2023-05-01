// fetch("https://www.omdbapi.com/?s=cars&apikey=1fb0a3cb")
//     .then(res => res.json())
//     .then(data => {
//         const sumerr = data
//         console.log(sumerr)
//     })




class Movie{
    constructor(data){
        Object.assign(this, data)
       
    }
    consoling(){
        return this.name
    }
}

const someObj ={
    name: "aleko"
}

const newObje = new Movie(someObj)

console.log(newObje.consoling())