fetch("https://www.omdbapi.com/?s=cars&apikey=1fb0a3cb")
    .then(res => res.json())
    .then(data => {
        const sumerr = data
        console.log(sumerr)
    })

    