//condicional simple
// if(true){
//     alert("is true!!!")
// }

// if(false){
//     alert("is true")
// }
// <> 

// condicional compuesto
// var num = 500

// if(num > 150){
//     alert(num + " es mayor a 150")
// }else{
//     alert(num + " es menor a 150")
// }

// var num1 = 100

// if(num1 > 150){
//     alert(num1 + " es mayor a 150")
// }else{
//     alert(num1 + " es menor a 150")
// }

// let dato = true

// if(dato == true){
//     alert(dato + " is true!!!!")
// } else{
//     alert(dato + " is false")
// }

// let dato1 = false

// if(dato1 == true){
//     alert(dato1 + " is true!!!!")
// } else{
//     alert(dato1 + " is false")
// }


// //parseInt

// let a = "10"

// a = parseInt(a)

// console.log(a + 10)

// let b = 120

// b = parseFloat(a) 

// console.log(b + 20,5)

// combinando

// let edad = prompt("ingrese su edad")
// edad = parseInt(edad)
// if(edad >= 18 ){
//     alert("puede ingresar")
// }else if(edad <= 18){
//     alert("no puede ingresar")
// }else{
//     alert("no ingreso su edad")
// }

//ciclos

// for(let i = 0 ; i < 11 ; i++ ){
//     alert(i)
// }

// for(let a = 0 ; a <= 100 ; a++){
//     console.log(a)
// }

//  for(let b = 0; b <=10; b++){
//      let nombre=prompt("ingrese nombre")
//     //  if(b==5){
//     //     break;
//     //  }
//     if(b==4){
//         continue;
//     }
//      alert("turno N° " + b + " a nombre de " + nombre)
//  }

// let num=prompt("ingrese numero")

// num=parseInt(num)

// for(let i=1 ; i < 11; i++){
//     let resultado = num * i ;
//     alert(num + "X" + i + "=" + resultado )
// }

// while
// let entrada = prompt("ingrese dato")

// while(entrada != "esc" ){
//     alert("el usuario ingreso " + entrada)
//     entrada = prompt("ingrese dato")
// }

//do while

// let num = 0
// do{
//     num = prompt("ingrese numero")
//     console.log(num)
// }while (num = parseInt(num))

//switch

// let entrada = prompt("ingrese nombre")

// while(entrada != "esc"){
//     switch(entrada){
//         case "Cris":
//               alert("hola Cris")
//               break;
//         case "Adri":
//             alert("Hola Adri")
//             break;
//         default:
//             alert("Nombre incorrecto")
//             break;
        
//     }
//     entrada = prompt("ingrese nombre")
// }

//tarea

let num = prompt("ingrese numero")
while(num !="esc")
{
    if( 10 <= num && num <= 100){
    alert("el numero esta entre 10 y 100")
}else if(10> num || num >100){
    alert("el numero no esta entre 10 y 100")
}else{
    alert("dato incorrecto")
}
    num=prompt("ingrese numero")
}
