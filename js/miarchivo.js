class Alcohol {
    constructor(nombre,descripcion,precio){
        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
     }
     precioIva(){
        this.precio= (this.precio+(this.precio*0,21))
        
     }
}
class Orden2 {
    constructor (id){
     this.nombre=id 
    }
    
}

//console.log(fetch("https://my-json-server.typicode.com/adriandileo/java/db"))

const lista = document.getElementById("alcohol")

// console.log(fetch("my-json-server.typicode.com/adriandileo/java/posts/1"))

fetch("https://my-json-server.typicode.com/adriandileo/java/db")
    .then((alcohol) => alcohol.json())
    .then((json) => console.log(json))
    .then( (data) => {
        console.log( data[1].nombre )
        console.log( data[1].precio )
        })
;

