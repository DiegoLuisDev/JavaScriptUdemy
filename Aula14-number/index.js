//  IEEE 745-2008 (Padrão do Js para fazer contas)
let num1 = 100.500; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2);
// .toString para fazer a concatenação, sem alterar o tipo de valor da variavel
console.log(typeof num1);
// num1 = num1.toString();
// estamos mudando o tipo da varialvel num1 de number para string

console.log(num1.toString(2));
// com o (2) iremos mostrando o valor de num1 em binario

console.log(num1.toFixed(3));
// .toFixed irá mostrar quantas casas decimas queremos, nesse caso 3 (isso em quando queremos arredondar algum números muito grande)

console.log(Number.isInteger(num1));
// Number.isInteger(num1) irá verificar se o valor da variavel é inteiro ou não (ele irá retornar verdadeiro ou false)

let temp = num1 * `5`;
console.log(Number.isNaN(temp));
// Number.isNaN(num1) irá retornar (true or false), no caso se num1 for NaN, ele retorna true, caso não for vai retornar false.

let num3 = 0.7;
let num4 = 0.1;

num3 += num4; //0.8
num3 += num4; //0.9
num3 += num4; //1.0

num3 = Number(num3.toFixed(2));
console.log(Number.isInteger(num3));
console.log(num3);