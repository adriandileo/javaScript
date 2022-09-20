
class Orden2 {
    constructor (id){
     this.nombre=id 
    }
    
}

//console.log(fetch("https://my-json-server.typicode.com/adriandileo/java/db"))

const lista = document.getElementById("alcohol")
const lista1 = document.querySelector('#listado')

// console.log(fetch("my-json-server.typicode.com/adriandileo/java/posts/1"))

fetch("https://my-json-server.typicode.com/adriandileo/java/db")
//     // .then((alcohol) => alcohol.json())
//     // .then((json) => console.log(json.bebidas))
//     // .then((bebidas)=>{
//     //     bebidas.forEach(bebidas => {
//     //         guardarLocal(bebidas,JSON.stringify(bebidas))
//     //         let contenedor = document.createElement("div")
//     //         contenedor.className="id"
//     //         contenedor.innerHTML= bebidas.nombre
//     //         document.body,menu.appendChild(contenedor)
          
//     //      });
//     // })
    .then((bebidas)=>guardarLocal(bebidas,JSON.stringify(bebidas)))
    .then((bebidas) => {
        bebidas,nombre.forEach((bebidas) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h4>${bebidas.nombre}</h4>
            <p>${bebidas.precio}</p>
            <p>Código: ${bebidas.descripcion}</p>
            <hr/>
        `
    lista1.append(li)
    })
    })
;