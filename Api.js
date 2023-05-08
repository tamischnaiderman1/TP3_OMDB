function buscar(event) {
    let palabraBuscada = document.getElementById("busqueda").value

    let tipo = document.getElementById("tipoDeContenido").value

    if (tipo == "default") {

        document.getElementById("peliculas").innerHTML = ""

        fetch("https://www.omdbapi.com/?apikey=165ae8f&" + "s=" + palabraBuscada)
            .then(res => res.json())
            .then(res => {
                console.log("obtuve respuesta")
                res.Search.forEach(elemento => {
                    let card = document.createElement("div").innerHTML=`<div class="card">
                    <img src="${elemento.Poster}" alt="Card Image">
                    <h2>${elemento.Title}</h2>
                    <p>${elemento.Year}</p>
                    </div>`
                    document.getElementById("peliculas").innerHTML+=card
                })
            })
            .catch(err => console.error("error", err))
        console.log("Fin consulta - fetch")


    }

    else {
        

        fetch("https://www.omdbapi.com/?apikey=165ae8f&" + "t=" + palabraBuscada +"&"+ "type=" + tipo)
            .then(res => res.json())
            .then(res => {
                console.log("obtuve respuesta")
                document.getElementById("peliculas").innerHTML = ""

    
                let card = document.createElement("div").innerHTML=`<div class="card" style="width: 18rem;">
                <img src="${res.Poster}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${res.Title}</h5>
                    <p class="card-text">Tipo: ${res.Type} <br>
                    Lanzamiento: ${res.Year}
                    </p>
                </div>
                </div>`
                console.log(card)
                    document.getElementById("peliculas").innerHTML+=card
            })
            .catch(err => console.error("error", err))
        console.log("Fin consulta - fetch")
            
    }

}