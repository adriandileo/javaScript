// function newEvento(){
//     do{
//     eventos.push(new evento (prompt("ingrese nombre del evento"),prompt("ingrese descripción"),prompt("ingrese mes"),+prompt("dia del evento"),+prompt("hora del evento")))
//     console.log(eventos)
    
//     }while(eventos.length<2)

//     const muestra = eventos.filter((meses)=> meses.mes.includes("enero"))
//     console.log(muestra)
// }


// let guardar = document.getElementById("guardar")
// guardar.onclick = () => {console.log("click")}

function clickGuardar(){
    let guardar = document.getElementById("guardar")
    guardar.onclick = () => {console.log("click")}
} 


let fecha = document.getElementById("dia")
fecha.addEventListener("input",()=>console.log(fecha.value))

