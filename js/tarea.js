
//algoritmo simple


var nombre = prompt("ingrese Nombre")
var edad = prompt("ingrese el año de nacimiento")
const año = 2022





while(nombre != "esc" || edad != "esc" ){
    var resultado = (año - edad)
    if( 100 > resultado && resultado > 0){
    alert("Hola " + nombre + " tienes " + resultado +" años")  
    } else if ( resultado < 0 || resultado > 100)
    {
    alert("Año incorrecto")
    edad1 = prompt("ingrese el año de nacimiento")
    var resultado1 = (año - edad1)
    alert("Hola " + nombre + " tienes " + resultado1 +" años")
    }
    nombre = prompt("ingrese Nombre")
    edad = prompt ("ingrese el año de nacimiento")
}















// let num =prompt("ingrese un numero")
// let num1 = prompt("ingrese otro numero")
// let simbolo = prompt("Ingrese uno de los siguientes simbolos + - * / ")
// num = parseFloat(num)
// num1 = parseFloat(num1)

// while( num != "esc" || num1 != "esc" || simbolo != "esc"){
//     if(simbolo = "+"){
//         alert(num + num1)
//     }else if(simbolo = "-"){
//         alert (num - num1)
//     }else if (simbolo = "*"){
//         alert (num * num1)
//     }else if(simbolo = "/"){
//         alert(num / num1)
//     }else (simbolo != "+" || "-" || "*" || "/");{
//         alert("Simbolo incorrecto")
//         simbolo = prompt("Ingrese uno de los siguientes simbolos + - * / ")   
//      }
//  }