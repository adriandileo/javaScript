
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













// algoritmo 2

var num =prompt("ingrese un numero")
var num1 = prompt("ingrese otro numero")



while( num != "esc" || num1 != "esc" || simbolo != "esc"){
    
    var simbolo = prompt("Ingrese uno de los siguientes simbolos + - * / ")
    num = parseInt(num)
    num1 = parseInt(num1)
    var igual = (num + simbolo + num1)
    if(simbolo == "+"){
        var result = (num + num1)
        alert(igual + " = "+ result )
    }else if (simbolo == "-"){
        var result1 = (num - num1)
        alert(igual + " = "+ result1 )
    }
    else if(simbolo == "/"){
        var result3 = (num / num1)
        alert(igual + " = "+ result3 )
    }else if(simbolo == "*"){
        var result2 = (num * num1)
        alert(igual + " = "+ result2 )
    }
    num =prompt("ingrese un numero")
    num1 = prompt("ingrese otro numero")
}