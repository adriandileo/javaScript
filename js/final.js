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
let comida=[{
    nombre: "tortilla francesa",descripcion: "Omellet de huevo con jamon y queso", precio: 200},
    {nombre:"toston de masa madre", descripcion:"pan de masa madre con tapenade de tomates, queso y polvo de olivas", precio:300}]
console.log(comida)
console.dir(comida)

let id = document.getElementById("id")
let producto = document.getElementById("producto")
let pedido = document.getElementById("pedido")

const guardarLocal = (clave,valor) => { localStorage.setItem(clave, valor) };

for (const comida1 of comida){
    guardarLocal(comida1,JSON.stringify(comida))
    console.log(comida1)

    localStorage.setItem(id,comida1.nombre)
    let id1 = localStorage.getItem(id)
    console.log(id1)
    localStorage.setItem(producto,comida1.descripcion)
    let descripcion1=localStorage.getItem(producto)
    console.log(descripcion1)
    // localStorage.setItem(valor,comida1.precio)
    // let valor1=localStorage.getItem(valor)
    // console.log(valor1)
}
let pedido1 = []
let buttonPedido = document.getElementById("pedido")
// buttonPedido.onclick = () => pedido.push ()

// for (const id1 of id){
//     guardar(id1, JSON.stringify(id))
// }

