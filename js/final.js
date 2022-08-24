//menu

//productos

class Comida {
    constructor(nombre,descripcion,precio){
        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
     }
     precioIva(){
        this.precio= (this.precio+(this.precio*0,21))
        
     }
}

//boton!!!
let agregar = document.getElementById("agregar")
agregar.onclick= () => comida.push (new Comida (
    prompt("ingrese nombre"),
    prompt("ingrese descripcion"),
    +prompt("ingrese precio")));

//resultado
let comida=[
    {nombre: "tortilla francesa",descripcion: "Omellet de huevo con jamon y queso", precio: 300},
    {nombre:"toston de masa madre", descripcion:"pan de masa madre con tapenade de tomates, queso y polvo de olivas", precio:300},
    {nombre:"Sanwinch Campirano",descripcion:"Tostado de jamon y queso de pan de masa madre",precio:300},
    {nombre:"Backroom Breackfast",descripcion:"Pan de masa madre con palta, huevo revuelto y panceta asada",precio:450},
    {nombre:"Mediterranea",descripcion:"Toston de masa madre con rucula, strachatella y tomates disecados",precio:450},
    {nombre:"Medialunas rellenas",descripcion:"Medialunas rellenas de lomito y queso tostadas",precio:200}
    // {nombre:"",descripcion:"",precio:},
    // {nombre:"",descripcion:"",precio:},
    // {nombre:"",descripcion:"",precio:},
]
console.log(comida)
console.dir(comida)

let id = document.getElementById("id")
let producto = document.getElementById("producto")
let pedido = document.getElementById("pedido")
const guardarLocal = (clave,valor) => { localStorage.setItem(clave, valor) };

for (const comida2 of comida){
    guardarLocal(comida2.nombre,JSON.stringify(comida2))
    console.log(comida2)
    let contenedor = document.createElement("div")
    contenedor.className="id"
    contenedor.innerHTML= comida2.nombre
    document.body,menu.appendChild(contenedor)
    let contenedor2 = document.createElement("div")
    contenedor2.className="producto"
    contenedor2.innerHTML= comida2.descripcion
    document.body,menu.appendChild(contenedor2)
    let contenedor3 = document.createElement("div")
    contenedor3.className="precio"
    contenedor3.innerHTML= comida2.precio
    document.body,menu.appendChild(contenedor3)
    let btn=document.createElement("button")
    btn.className="pedido"
    btn.id=comida2.nombre
    btn.innerHTML="+"
    document.body,menu.appendChild(btn)

    
}

let pedido1 = []
let buttonPedido = document.getElementById("pedido")
// buttonPedido.onclick = () => pedido.push ()

// for (const id1 of id){
//     guardar(id1, JSON.stringify(id))
// }

