// string, number, underfined, null, boolean, symbol
// const nome = ´Luiz`; //string (usando aspas simples)
// const nome1 = ´´Luiz``; //string (usando aspas duplas)
const nome2 = `Luiz`; //string (podemos utilizar template string)
const num1 = 10; //number
const num2 = 10.52 //number (ele já interpreta que é um numero real)
let nomeAluno; //underfined -> não aponta para nenhum local na memória
const sobrenomeAluno = null; // Nulo -> não aponta para nenhum local na memória
const aprovado = true; //Boolean = true, false (lógico)

console.log(typeof nome2, nome2); //typeof (mostra o tipo de dado)