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
//calendario

// function and class
// class Evento{
//     constructor(nombre,descripcion,mes,dia,hora){
//         this.nombre = nombre
//         this.descripcion = descripcion
//         this.mes= mes
//         this.dia = dia
//         this.hora = hora
//     }
// }


// let eventos = []





// //guardado de datos
// let record = document.getElementById("record")
// record.addEventListener("input",()=>console.log(record.value))
// let fecha = document.getElementById("dia")
// fecha.addEventListener("input",()=>console.log(fecha.value))


{/* <section id="calendario">
<section class="dia">1</section>
<section class="dia">2</section>
<section class="dia">3</section>
<section class="dia">4</section>
<section class="dia">5</section>
<section class="dia">6</section>
<section class="dia">7</section>
<section class="dia1">8</section>
<section class="dia1">9</section>
<section class="dia1">10</section>
<section class="dia1">11</section>
<section class="dia1">12</section>
<section class="dia1">13</section>
<section class="dia1">14</section>
<section class="dia2">15</section>
<section class="dia2">16</section>
<section class="dia2">17</section>
<section class="dia2">18</section>
<section class="dia2">19</section>
<section class="dia2">20</section>
<section class="dia2">21</section>
<section class="dia3">22</section>
<section class="dia3">23</section>
<section class="dia3">24</section>
<section class="dia3">25</section>
<section class="dia3">26</section>
<section class="dia3">27</section>
<section class="dia3">28</section>
<section class="dia4">29</section>
<section class="dia4">30</section>
</section> */}