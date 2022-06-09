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
//function calculadora(parametro1, parametro2, operacion){
//    switch(operacion){
//        case "+":
//            return parametro1 + parametro2;
//            break;
//        case "-":
//            return parametro1 - parametro2;
//            break;
//        case "/":
//            return parametro1 / parametro2;
//            break;
//        case "*":
//            return parametro1 * parametro2;
//            break;
//        default:
//            return 0;
//            break;
//    }
//}
//calculadora()



function suma (){
    let dato = 0;
    dato = 8 + 9;
    alert(dato)
}
suma()

function menos(){
    let resta = 0;
    resta = 4-3;
    alert(resta)
}
menos()


function calculadora(parametro1, parametro2, operacion){

    switch (operacion){
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
        default :
            return 0;
            break;   
}

}

alert (calculadora());


