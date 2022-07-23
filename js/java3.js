//simples
// function saludar(){
//     alert("Holis")
// }
// function sumar1(){
//     let num1 = prompt("ingrese un numero")
//     let num2 = prompt("ingrese otro numero")
//     num1 = parseFloat(num1)
//     num2 = parseFloat(num2)
//     let resultado = num1 + num2
//     alert(resultado)
// }


// Parametros

function sumar(num3,num4){
    let resultado1 = num3 + num4
    alert(resultado1)
}



// function and switch

function calculator(numero1,numero2,operation){
    switch(operation){
        case "+":
            return numero1+numero2
            break
        case "-":
            return numero1-numero2
            break
        case "*":
            return numero1*numero2
            break
        case "/":
            return numero1/numero2
            break
        default:
            return "error"
            break
    }
}


// alert(calculator(+prompt("ingrese un numero"),+prompt("ingrese otro numero"),prompt("ingrese operation")))





