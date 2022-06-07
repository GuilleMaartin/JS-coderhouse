let envio = prompt ("En que estado se encuentra?")

//cliente fuera de domicilio = reintentar
//siniestrado = reclamar 
//entregado = ok
//en destino = ok

switch (envio){
    case "entregado" || "en destino":
        alert ("ok")
        break;
    case "siniestrado":
        alert ("reclamar")
        break;
    case "cliente fuera de domicilio":
        alert ("reintentar")
        break;
    default:
        alert ("no existe este estado");
        prompt ("¿desea repetirlo?:")
        break;
}
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

function pedido(){
    switch (pedido){
        case "recibido":
            return prompt("its ok");
            break;
        case "entregado en el domicilio":
            return prompt("its ok");
            break;
        case "extraviado":
            return prompt ("notificado");
            break;
        default:
            return 0;
            break;
    }
}
