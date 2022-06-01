

let number = prompt ("inserte numero")

if (number <= 10){
  console.log ("primera etapa");
  } 
else if (number > 11 && number <= 34){
  console.log ("segunda etapa");
  } 
else if  (number >= 35 && number <=67) {
    console.log ("its ok");
} 
else if (number >=68 && number <= 100){
  console.log ("deberias chequear tu edad");
}

                    //

let nombre = prompt ("ingrese su nombre")

let apellido = prompt ("ingrese su apellido")

if ((nombre != "") && (apellido != "")){
  alert ("Nombre: " +  nombre + 
   " Apellido : " + apellido )
} 
else ("Error: Ingresar nombre y apellido")

                    //

                    
let entrada = prompt ("¿Que desea llevar?");



while (entrada != "ESC"){
  switch (entrada){
    case "coca": 
        alert ("nos queda pepsi");
        break;
    case "sprite":
        alert ("nos queda 7up");
        break;
    case "fanta":
        alert ("nos queda mirinda");
        break;
    case "shueps":
        alert ("nos queda agua tonica linea pepsi");
        break;
    default:
        alert ("Siguiente");
        break; 
  }
  entrada = prompt ("Que desea llevar");
  break;
} 

