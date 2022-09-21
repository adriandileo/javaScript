const guardarLocal2 = (clave,valor) => { localStorage.setItem(clave, valor) };


fetch("https://my-json-server.typicode.com/adriandileo/java/db")
    .then((resp) => resp.json())
    .then((alcohol)=>{
        for (const bebida of alcohol.bebidas){
            guardarLocal(bebida,JSON.stringify(bebida))
            console.log(bebida)
            let contenedor = document.createElement("div")
            contenedor.className="id"
            contenedor.innerHTML= bebida.nombre
            document.body.menu,comidas.appendChild(contenedor)
            document.body.menu,comidas.appendChild(contenedor)
            document.body.menu,comidas.appendChild(contenedor)
            
            let contenedor2 = document.createElement("div")
            contenedor2.className="producto"
            contenedor2.innerHTML= bebida.descipsion
            document.body.menu,comidas.appendChild(contenedor2)

            let contenedor3 = document.createElement("div")
            contenedor3.className="precio"
            contenedor3.innerHTML= bebida.precio
            document.body.menu,comidas.appendChild(contenedor3)

            let btn=document.createElement("button")
            btn.className="pedido"
            btn.id=bebida.nombre
            btn.innerHTML="+"
            document.body.menu,comidas.appendChild(btn)

            let orden = document.getElementById(bebida.nombre)
            orden.onclick= () => guardarLocal(orden1,JSON.stringify(orden1.push(new Orden(bebida.nombre,bebida.precio))))
            //toastify
            btn.addEventListener("click", () => {
                Toastify({
                    text: "Agregado",
                    duration:1000,
                    gravity: "bottom",
                    position:"left"
                }).showToast();
            })






        }
    })
;