//bucle for
for (let cont = 0; cont <= 9; cont++) {
  console.log(cont);
}

//concatenacion
// let nombre = 'fran'
// 'hola' + 'mundo'  = 'holamundo'
// 'hola ' + nombre  = 'hola fran'

// `hola ${nombre}`

// for (let i = 0; i < 10; i++) {
//   let resultado =  `${i} * 1 =  ${1 * i} `;
//   let resultado2 = `${i} * 2 =  ${2 * i} `;
//   let resultado3 = `${i} * 3 =  ${3 * i} `;
//   let resultado4 = `${i} * 4 =  ${4 * i} `;
//   let resultado5 = `${i} * 5 =  ${5 * i} `;
//   let resultado6 = `${i} * 6 =  ${6 * i} `;
//   let resultado7 = `${i} * 7 =  ${7 * i} `;
//   let resultado8 = `${i} * 8 =  ${8 * i} `;
//   console.log(resultado);
//   console.log(resultado2);
//   console.log(resultado3);
//   console.log(resultado4);
//   console.log(resultado5);
//   console.log(resultado6);
//   console.log(resultado7);
//   console.log(resultado8);
// }
contador1 = 1;
contador2 = 0;
resultado = ' 0 * 0 = 0'
resultado = ' 0 * 1 = 0'
resultado = ' 0 * 10 = 0'

for (let contador = 0; contador <= 1000; contador++) {
  console.log(`----Tabla del ${contador}-----`);
  for (let contador2 = 0; contador2 <= 10; contador2++) {
    let resultado = `${contador} * ${contador2} = ${contador * contador2}`;
    console.log(resultado);
  }

}
