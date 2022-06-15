//let envio = prompt ("En que estado se encuentra?")
//
////cliente fuera de domicilio = reintentar
////siniestrado = reclamar 
////entregado = ok
////en destino = ok
//
//switch (envio){
//    case "entregado" || "en destino":
//        alert ("ok")
//        break;
//    case "siniestrado":
//        alert ("reclamar")
//        break;
//    case "cliente fuera de domicilio":
//        alert ("reintentar")
//        break;
//    default:
//        alert ("no existe este estado");
//        prompt ("¿desea repetirlo?:")
//        break;
//}

function calculadora(parametro1, parametro2, operacion){
    switch(operacion){
        case "+":
            return parametro1 + parametro2;
            break;
        case "-":
            return parametro1 - parametro2;
            break;
        case "/":
            return parametro1 / parametro2;
            break;
        case "*":
            return parametro1 * parametro2;
            break;
        default:
            return 0;
            break;
    }
}
calculadora()



// function suma (){
//     let dato = 0;
//     dato = 8 + 9;
//     alert(dato)
// }
// suma()

// function menos(){
//     let resta = 0;
//     resta = 4-3;
//     alert(resta)
// }
// menos()


// function calculadora(parametro1, parametro2, operacion){

//     switch (operacion){
//         case "+":
//             return parametro1 + parametro2;
//             break;
//         case "-":
//                 return parametro1 - parametro2;
//                 break;
//         case "/":
//             return parametro1 / parametro2;
//             break;
//         case "*":
//             return parametro1 * parametro2;
//             break;
//         default :
//             return 0;
//             break;   
// }

// }

// alert (calculadora());


//const paises = [ 'argentina', 'nicaragua', 'madagascar', 'vietnam', 'cuba'];
//
//
//let resutlado = paises[1 ]+ paises [3];
//
//
//
//function recorrerArray(){
//    console.table(paises)
//    for (let i = 0; i < paises.length; i++) {
//        console.log (paises[i])   
//    }
//}
//
//const musica = ["spinetta", "calamaro", "monamour", "dojacat", "tito el bambino"]
//
//function llamandoaMusica(){
//    console.table(musica)
//    for (let i = 0; i < musica.length; i++) {
//        console.log(musica[i])
//    }
//}






const palabra = ["A", "Ante", "Bajo", "Con", "Contra", "De", "Desde"]
//"En", "Entre","Hacia", "Hasta", "Durante", "Mediante", "Para", "Por", "Pro", 
//"Sin", "So", "Sobre", "Tras", "Versus", "Via"]

function listarPalabras(){
    for (let i = 0; i < palabra.length; i++) {
        console.log(palabra[i])
    }
} 

function agregarPalabra(){
    let agregar = prompt ("Que pais desea agregar: ")
        alert("se ha agreagado el pais : " + agregar)
       palabra.unshift(agregar)
}

function buscarPalabra(){
    let mensaje = prompt("Que palabra desea buscar: ")
    let resultado = palabra.includes(mensaje)
        if  (resultado) {
            alert ("Se encontro la palabra con exito: " + mensaje)
        } else {
            alert ("No se encontro la palabra: " + mensaje)
        } 
}

function quitarPalabra(){
    debugger
        let mensaje = prompt("Que palabra desea eliminar: ")
        let buscador = palabra.indexOf(mensaje);
        let resultado = palabra.splice(buscador, 1);
            alert ("Ha eliminado la palabra: " + resultado);
}
 

const eliminar = (pala) => {
     let mensaje = prompt ("Que palabra desea eliminar: ");
    let indice = palabra.indexOf(mensaje);
        if (indice != -1){
            palabra.splice(indice, 1)
        }
}
