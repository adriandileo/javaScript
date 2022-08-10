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


let eventos = []





//guardado de datos
let record = document.getElementById("record")
record.addEventListener("input",()=>console.log(record.value))
let fecha = document.getElementById("dia")
fecha.addEventListener("input",()=>console.log(fecha.value))
