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
let comida=[]

//boton!!!
let agregar = document.getElementById("agregar")
agregar.onclick= () => comida.push (new Comida (
    prompt("ingrese nombre"),
    prompt("ingrese descripcion"),
    +prompt("ingrese precio")));

//resultado
console.log(comida)
console.dir(comida)

//vista

let divComida = document.getElementById("comida")



for (const comidas of comida){
    let li = document.createElement("li")
    li.innerHTML=comidas
    divComida.appendChild(li)
    
}
