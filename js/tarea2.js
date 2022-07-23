//pagina de reservas


function inicio(nombre,apellido){
    switch(nombre,apellido){
        case "Cristian"&"Davino":
            alert("Bienvenido encargado " + nombre + apellido)
            break
        default:
            alert("Bienvenido cliente " + nombre + apellido) 
            break

    }
}

inicio(prompt="ingrese nombre",prompt("ingrese apellido"))