// //Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));
function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}
const numeros= [1, 2, 3, 4]

porCadaUno(numeros, console.log)

let total = 0

function acumular(num) {
    total += num //acumulación (suma de numeros en el arr)
}

porCadaUno(numeros, acumular)
console.log(total)

const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado)