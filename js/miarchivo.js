const guardarLocal2 = (clave,valor) => { localStorage.setItem(clave, valor) };


fetch("https://my-json-server.typicode.com/adriandileo/java/db")
    .then((resp) => resp.json())
    .then((alcohol)=>console.log(alcohol.bebidas))
    .then(()=>{
        for (const bebida of bebidas){
            guardarLocal(bebida,JSON.stringify(bebida))
            console.log(bebida)
            // let contenedor = document.createElement("div")
            // contenedor.className="id"
            // contenedor.innerHTML= comida2.nombre
            // document.body.menu,comidas.appendChild(contenedor)
        }
    })
;