const botonMayor = document.createElement("button")
botonMayor.className="mayor"
botonMayor.id="alcohol"
botonMayor.innerHTML="MAYOR DE EDAD"
document.body.header,boton18.appendChild(botonMayor)
const botonMenor = document.createElement("button")
botonMenor.className="mayor"
botonMenor.id="alcohol"
botonMenor.innerHTML="MAYOR DE EDAD"
document.body.header,boton18.appendChild(botonMenor)


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

class SinAlchol {
    constructor(nombre,descripcion,precio){
        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
     }
     precioIva(){
        this.precio= (this.precio+(this.precio*0,21))
        
     }
}

let sinalcohol=[
    {
        nombre:"Sprite",
        descipsion:"Gaseosa sabor lima limon",
        precio:100
    },
    {
        nombre:"Coca-cola",
        descipsion:"Bebida gasificado sabor cola",
        precio:100
    },
    {
        nombre:"Fanta",
        descipsion:"Bebida sabor naranja",
        precio:100
    },
    {
        nombre:"Jugo de Naranja",
        descipsion:"Exprimido de naranja natural",
        precio:150
    },
]

let alcohol=[
    {
        nombre:"Aperol Spritz",
        descipsion:"Aperol y espumante",
        precio:200
    },
    {
        nombre:"Bramble",
        descipsion:"Gin, limon, cassis y almibar",
        precio:300
    },
    {
        nombre:"Gimlet",
        descipsion:"Gin, limon y almibar",
        precio:250
    },
    {
        nombre:"Espreso Martini",
        descipsion:"Martini clasico batido con café",
        precio:300
    },
    {
        nombre:"Campari",
        descipsion:"Campari con naranja",
        precio:150
    },
    {
        nombre:"Gin tonic",
        descipsion:"Gin con tonica y frutas a elección",
        precio:200
    },
]

console.log(alcohol)
const guardarLocal1 = (clave,valor) => { localStorage.setItem(clave, valor) };
botonMayor.addEventListener("click",()=> {
for(const alcohol1 of alcohol){
    guardarLocal1(alcohol1,JSON.stringify(alcohol1))
    console.log(alcohol1)
    let contenedor = document.createElement("div")
    contenedor.className="id"
    contenedor.innerHTML= alcohol1.nombre
    document.body.menu,bebidas.appendChild(contenedor)

    let contenedor2 = document.createElement("div")
    contenedor2.className="producto"
    contenedor2.innerHTML= alcohol1.descipsion
    document.body.menu,bebidas.appendChild(contenedor2)

    let contenedor3 = document.createElement("div")
    contenedor3.className="precio"
    contenedor3.innerHTML= alcohol1.precio
    document.body.menu,bebidas.appendChild(contenedor3)

    let btn=document.createElement("button")
    btn.className="pedido"
    btn.id=alcohol1.nombre
    btn.innerHTML="+"
    document.body.menu,bebidas.appendChild(btn)
    let orden =  document.getElementById(alcohol1.nombre)    
    orden.onclick= () => guardarLocal(orden1,JSON.stringify(orden1.push(new Orden(alcohol1.nombre))))

    btn.addEventListener("click", () => {
         Toastify({
             text: "Agregado",
             duration:1000,
             gravity: "bottom",
             position:"left"
         }).showToast();
    })
    btn.addEventListener("click",()=>{
        for (const orden of orden1){
        guardarLocal(orden,JSON.stringify(orden))
        console.log(orden)}})
}
})

botonMenor.addEventListener("click",()=> {
    for(const sinAlcohol of sinalcohol){
        guardarLocal1(sinAlcohol,JSON.stringify(sinAlcohol))
        console.log(sinAlcohol)
        let contenedor = document.createElement("div")
        contenedor.className="id"
        contenedor.innerHTML= sinAlcohol.nombre
        document.body.menu,bebidas.appendChild(contenedor)
    
        let contenedor2 = document.createElement("div")
        contenedor2.className="producto"
        contenedor2.innerHTML= sinAlcohol.descipsion
        document.body.menu,bebidas.appendChild(contenedor2)
    
        let contenedor3 = document.createElement("div")
        contenedor3.className="precio"
        contenedor3.innerHTML= sinAlcohol.precio
        document.body.menu,bebidas.appendChild(contenedor3)
    
        let btn=document.createElement("button")
        btn.className="pedido"
        btn.id=sinAlcohol.nombre
        btn.innerHTML="+"
        document.body.menu,bebidas.appendChild(btn)
        let orden =  document.getElementById(sinAlcohol.nombre)    
        orden.onclick= () => guardarLocal(orden1,JSON.stringify(orden1.push(new Orden(sinAlcohol.nombre))))
        btn.addEventListener("click", () => {
             Toastify({
                 text: "Agregado",
                 duration:1000,
                 gravity: "bottom",
                 position:"left"
             }).showToast();
        })
        
        btn.addEventListener("click",()=>{
            for (const orden of orden1){
            guardarLocal(orden,JSON.stringify(orden))
            console.log(orden)}})
        
        
    }    
})