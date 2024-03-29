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

class Orden {
    constructor (id,precio){
     this.nombre=id 
     this.precio=precio
    }
}

let comida=[
    {nombre: "Tortilla francesa",descripcion: "Omellet de huevo con jamon y queso", precio: 300},
    {nombre:"Toston de masa madre", descripcion:"Pan de masa madre con tapenade de tomates, queso y polvo de olivas", precio:300},
    {nombre:"Sanwinch Campirano",descripcion:"Tostado de jamon y queso de pan de masa madre",precio:300},
    {nombre:"Backroom Breackfast",descripcion:"Pan de masa madre con palta, huevo revuelto y panceta asada",precio:450},
    {nombre:"Mediterranea",descripcion:"Toston de masa madre con rucula, strachatella y tomates disecados",precio:450},
    {nombre:"Medialunas rellenas",descripcion:"Medialunas rellenas de lomito y queso tostadas",precio:200}
]
let orden1 = []

const guardarLocal = (clave,valor) => { localStorage.setItem(clave, valor) };


for (const comida2 of comida){
    guardarLocal(comida2,JSON.stringify(comida2))

    let contenedor = document.createElement("div")
    contenedor.className="id"
    contenedor.innerHTML= comida2.nombre
    document.body.menu,comidas.appendChild(contenedor)

    let contenedor2 = document.createElement("div")
    contenedor2.className="producto"
    contenedor2.innerHTML= comida2.descripcion
    document.body.menu,comidas.appendChild(contenedor2)

    let contenedor3 = document.createElement("div")
    contenedor3.className="precio"
    contenedor3.innerHTML= comida2.precio
    document.body.menu,comidas.appendChild(contenedor3)

    let btn=document.createElement("button")
    btn.className="pedido"
    btn.id=comida2.nombre
    btn.innerHTML="+"
    document.body.menu,comidas.appendChild(btn)

    let orden = document.getElementById(comida2.nombre)
    orden.onclick= () => guardarLocal(orden1,JSON.stringify(orden1.push(new Orden(comida2.nombre,comida2.precio))))
    btn.addEventListener("click", () => {
        Toastify({
            text: "Agregado",
            duration:1000,
            gravity: "bottom",
            position:"left"
        }).showToast();
    })
}


console.log(orden1)

let finalizarbtn=document.createElement("button")
finalizarbtn.className="finalizarbtn"
finalizarbtn.innerHTML="Finalizar pedido"
document.body.menu,finalizar.appendChild(finalizarbtn)

finalizar.addEventListener("click",()=>{
    for (const orden of orden1){
    guardarLocal(orden,JSON.stringify(orden))
    console.log(orden.nombre)
    let pedido = document.createElement("div")
    pedido.className="pedidoFinal"
    pedido.innerHTML= orden.nombre
    document.body.footer,pedidos.appendChild(pedido)
    
}

}) 