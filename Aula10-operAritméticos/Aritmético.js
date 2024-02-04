/* 
Ordem de operação
()
**
* / %
+ - 
*/

// incremento ++ também poderiamos escrever assim: ++contador, logo a adição seria antes
let contador = 1;
contador++
console.log(contador);

// decremento -- também poderiamos escrever assim: --contador, logo a subtração seria antes
let contador2 = 5;
contador2--
console.log(contador2);

// operadores de atribuição
/* const passo = 5;
let contador3 = 0;
contador3 += passo;
contador3 += passo;
console.log(contador3); */

let contador3 = 2;
contador3 *= 2;
contador3 *= 2;
contador3 *= 2;
console.log(contador3); 

// NaN - Not a Number - parseInt(inteiro) parseFloat(decimais)
const num1 = 10;
const num2 = Number(`5.2`);
console.log(num1 + num2);
console.log(typeof num2);