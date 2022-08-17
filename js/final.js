//menu

//productos

class Comida {
    constructor(nombre,descripcion,precio){
        this.nombre=nombre
        this.descripcion=descripcion
         this.precio=precio
     }
     precioIva(){
         precio= (precio+(precio*0,21))
     }
}
//boton!!!
let agregar = document.getElementById("agregar")
agregar.onclick= () => comida.push (new Comida (
    prompt("ingrese nombre"),
    prompt("ingrese descripcion"),
    +prompt("ingrese precio")));

//resultado
let comida=[{nombre: "tortilla francesa",descripcion: "Omellet de huevo con jamon y queso", precio: 200}]
console.log(comida)
console.dir(comida)
let id = document.getElementById("id")
let producto = document.getElementById("producto")
let pedido = document.getElementById("pedido")

const guardarLocal = (clave,valor) => { localStorage.setItem(clave, valor) };

for (const comida1 of comida){
    guardarLocal(comida1,JSON.stringify(id.innerText) )
    console.log(comida1)
}



// for (const producto1 of comida){

//     guardarLocal(producto1.nombre,JSON.stringify(comida))

// }
// console.log(producto1)
//vista

let pedido1 = []
let buttonPedido = document.getElementById("pedido")
// buttonPedido.onclick = () => pedido.push ()

// for (const id1 of id){
//     guardar(id1, JSON.stringify(id))
// }
