const guardarLocal2 = (clave,valor) => { localStorage.setItem(clave, valor) };


fetch("https://my-json-server.typicode.com/adriandileo/java/db")
    .then((resp) => resp.json())
    .then((alcohol)=> botonMayor.addEventListener("click",()=>{
        for (const bebida of alcohol.bebidas){
            guardarLocal(bebida,JSON.stringify(bebida))
            let contenedor = document.createElement("div")
            contenedor.className="id"
            contenedor.innerHTML= bebida.nombre
            document.body.menu,bebidas.appendChild(contenedor)
            document.body.menu,bebidas.appendChild(contenedor)
            document.body.menu,bebidas.appendChild(contenedor)
            
            let contenedor2 = document.createElement("div")
            contenedor2.className="producto"
            contenedor2.innerHTML= bebida.descipsion
            document.body.menu,bebidas.appendChild(contenedor2)

            let contenedor3 = document.createElement("div")
            contenedor3.className="precio"
            contenedor3.innerHTML= bebida.precio
            document.body.menu,bebidas.appendChild(contenedor3)

            let btn=document.createElement("button")
            btn.className="pedido"
            btn.id=bebida.nombre
            btn.innerHTML="+"
            document.body.menu,bebidas.appendChild(btn)

            let orden = document.getElementById(bebida.nombre)
            orden.onclick= () => guardarLocal(orden1,JSON.stringify(orden1.push(new Orden(bebida.nombre,bebida.precio))))

            btn.addEventListener("click", () => {
                Toastify({
                    text: "Agregado",
                    duration:1000,
                    gravity: "bottom",
                    position:"left"
                }).showToast();
            })






        }
    }))
;