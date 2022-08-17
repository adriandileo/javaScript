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


// guardar solo si 

function guardar (){
    let guardar = document.getElementById("guardar")
    let record = document.getElementById("record")
    let fecha = document.getElementById("dia")
    if(guardar.onclick){
        record.addEventListener("input",()=>console.log(record.value))
        fecha.addEventListener("input",()=>console.log(fecha.value))
    }else {
        
    }
}

// function clickGuardar(){
//     let guardar = document.getElementById("guardar")
//     guardar.onclick = () => {console.log("click")}
// } 