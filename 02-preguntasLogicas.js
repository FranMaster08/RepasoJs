(condicion1 ) [operador] (condicion2 ) //true false

// y logico     (&&)   true && true == true   
// o logico     (||)   true || false == true
// == igualacion (==)  condicion1 = condicion2  true
// != desigualdad (!=)  condicion1 != condicion2 true
 
// >  mayor que
// <  menor que
// >= mayor o igual que
// <= menor o igual que
// + mas
// - menos
// * por
// / entre
// % modulo o resto


let nombre = 'BRALLAN'
let edad = 30
let estatura = 1.69
let semanascotizadas = 90

let pension = ( edad >= 62 ) && (semanascotizadas >= 1600)

console.log(pension);