
//funcion declarada

let saludo2 = function(nombre,apellido){
    console.log(`Hola ${nombre} tu apellido es ${apellido}`);
}


//funciones expresadas
function saludo(nombre , apellido) {
    console.log(`Hola ${nombre} tu apellido es ${apellido}`); 
}

function dameTablas(minimo, maximo){
    let resultado =''
    for (let factor1 = minimo; factor1 <= maximo; factor1++) {
        for (let factor2 = 0; factor2 <= 10; factor2++) {
           resultado += `${factor1} * ${factor2} = ${factor1 * factor2} \n`
        }  
    }
    return resultado;
}



let datos = dameTablas(0,20)
console.log(datos);