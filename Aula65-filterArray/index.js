// O método filter em JavaScript é utilizado para criar um novo array com todos os elementos que passam em um teste implementado por uma função fornecida
// Ele não modifica o array original, mas retorna um novo array contendo os elementos que atendem à condição especificada na função de callback.

// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 10, 13, 24];


const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);

// função mais simplificada que retorna os numeros maiores que 10;
// const numerosFiltrados = numeros.filter(valor => valor > 10);

// const numerosFiltrados = numeros.filter(callbackFilter);
// function callbackFilter(valor) {
//     return valor > 10;
// }

// function retorna() {
//     // let resultados = [];
//     for(let i = 0; i < numeros.length; i++){
//         if (numeros[i] >= 10) {
//             console.log(`indice: ${i} - valor:${numeros[i]}`)
//             // resultados.push({indice: i, numero: numeros[i]});
//         }
//     }
//     // return resultados;
// }
// retorna();

// Filtrar Strings que Contêm uma Substring
const palavras = ['maçã', 'banana', 'manga', 'abacaxi', 'abacate'];
const comAba = palavras.filter(palavra => palavra.includes('aba'));

console.log(comAba); // Saída: ['abacaxi', 'abacate']


// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: `Luiz`, idade: 62},
    {nome: `Maria`, idade: 23},
    {nome: `Eduardo`, idade: 55},
    {nome: `Leticia`, idade: 19},
    {nome: `Rosana`, idade: 32},
    {nome: `Wallace`, idade: 47}
];

const nomesGrandes = pessoas.filter((obj) => {
    return obj.nome.length >= 5;
});
const pessoasCiquenta = pessoas.filter(function(obj) {
    return obj.idade > 50;
});
const nomeTerminaComA = pessoas.filter(function(obj) {
    return obj.nome.toLowerCase().endsWith(`a`);
});
console.log(nomeTerminaComA);