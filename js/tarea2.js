//pagina de reservas
class personas{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.encargado = function(){
            switch(nombre,apellido){
                case "Cristian", "Davino":
                    console.log("Hola encargado "+ this.nombre+ " "+ this.apellido.UpperCase())
                default:
                    console.log("Hola cliente "+ this.nombre + " " + this.apellido)
                    break
            }
        }
    }  
 
 
}
const persona1 = new personas (prompt("ingrese nombre"),prompt("ingrese apellido"))    
persona1.encargado()

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