//pagina de reservas

// cambiar switch por if(capacidad de dos parametros)
class personas{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    //     this.encargado = function(){
    //         switch(nombre,apellido){
    //             case "Cristian", "Davino":
    //                 console.log("Hola encargado "+ this.nombre+ " "+ this.apellido.UpperCase())
    //             default:
    //                 console.log("Hola cliente "+ this.nombre + " " + this.apellido)
    //                 break
    //         }
    //     }
    // }  
//     encargado(){
//         if(nombre=="CRISTIAN",apellido=="DAVINO"){
//             this.encargado= this.personas

//         }else
//     }
 
 }
 const persona1 = new personas (prompt("ingrese nombre"),prompt("ingrese apellido"))    


class comida{
    constructor(producto,descripcion,precioBruto){
        this.producto = producto
        this.descripcion = descripcion
        this.precioBruto = parseFloat(precioBruto)
        }    
    precioFinal(){
        this.precioBruto = this.precioBruto * 1.21
        console.log(this.precioBruto)
    }
}
let comida1 = new comida (prompt("ingrese producto"),prompt("ingrese descripción"),prompt("ingrese precio bruto"))



console.log(comida1)
comida1.precioFinal()