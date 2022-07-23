//pagina de reservas
class personas{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.encargado = function(){
            switch(nombre,apellido){
                case "Cristian", "Davino":
                    console.log("Hola encargado "+ this.nombre+ " "+ this.apellido.toUpperCase())
                default:
                    console.log("Hola cliente "+ this.nombre + " " + this.apellido)
                    break
            }
        }
    }  
    
    

}

const persona1 = new personas (prompt("ingrese nombre"),prompt("ingrese apellido"))    
persona1.encargado()

// for(const nombre in persona1){
//     console.log(persona1)
// }






