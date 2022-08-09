//calendario

// function and class
class Evento{
    constructor(nombre,descripcion,mes,dia,hora){
        this.nombre = nombre
        this.descripcion = descripcion
        this.mes= mes
        this.dia = dia
        this.hora = hora
    }
}
// function crearEvento() {
//     let evento1 = new evento (prompt("ingrese nombre del evento"),prompt("ingrese descripción"),prompt("ingrese mes"),+prompt("dia del evento"),+prompt("hora del evento"))
//     console.log(evento1)
//     console.log(new Date())
// }
// crearEvento()

//arrayas

let eventos = []

// function clickGuardar(){
//     let guardar = document.getElementById("guardar")
//     guardar.onclick = () => {console.log("click")}
// } 

// guardado de datos
let record = document.getElementById("record")
record.addEventListener("input",()=>console.log(record.value))
let fecha = document.getElementById("dia")
fecha.addEventListener("input",()=>console.log(fecha.value))


// guardar solo si 