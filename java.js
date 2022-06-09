  const articulo = document.querySelector("#contenido");
  const button = document.querySelector("#leer-mas");
            
            function leerMas(){
                if (articulo.className === "abierto"){
                  articulo.className = "";
                  button.textContent = "Mostrar mas"
                } else {
                  articulo.className = "abierto";
                  button.textContent = "Mostrar menos"
                }
            } 

            leerMas()