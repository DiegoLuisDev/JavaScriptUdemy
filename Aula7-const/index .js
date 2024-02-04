// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não podem começar com números
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive(Palavras em maiusculos e minusculos tem diferença)
// Não podemos modificar o valor de uma constante
// Não utilize var, utilize const

// String = texto estará dentro de aspas
// Number = número estará sem nada

const primeiroNumero = `5`;
const segundoNumero = `10`;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado *3;
resultadoTriplicado = resultadoTriplicado +  5;

console.log(resultadoTriplicado)

console.log(typeof (primeiroNumero + segundoNumero));
