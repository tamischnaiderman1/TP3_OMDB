function Buscar(event) {
    let palabraBuscada = document.getElementById("busqueda").value
    let arrayResultados = []

    let tipo = document.getElementById("tipoDeContenido").value


    if (tipo == null) {

        fetch("https://www.omdbapi.com/?apikey=165ae8f&" + "t=" + palabraBuscada)
            .then(res => res.json())
            .then(res => {
                arrayResultados.push(res)
                console.log("obtuve respuesta")
                valores = document.getElementById("valores");
                arrayResultados.forEach(element => {
                })
            })
            .catch(err => console.error("error", err))
        console.log("Fin consulta - fetch")


    }

    else {

        fetch("https://www.omdbapi.com/?apikey=165ae8f&" + "t=" + palabraBuscada + "type=" + tipo)
            .then(res => res.json())
            .then(res => {
                console.log("obtuve respuesta")
                valores = document.getElementById("valores");
                res.forEach(actual => {
                    if (actual.compra && actual.venta) {
                        dolar = document.createElement("li")
                        dolar.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`
                        valores.appendChild(dolar)
                    }
                })
            })
            .catch(err => console.error("error", err))
        console.log("Fin consulta - fetch")

    }

}