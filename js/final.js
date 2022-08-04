//calendario

// function and class
class evento{
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

function newEvento(){
    do{
    eventos.push(new evento (prompt("ingrese nombre del evento"),prompt("ingrese descripción"),prompt("ingrese mes"),+prompt("dia del evento"),+prompt("hora del evento")))
    console.log(eventos)
    
    }while(eventos.length<2)

    const muestra = eventos.filter((meses)=> meses.mes.includes("enero"))
    console.log(muestra)
}

newEvento()
