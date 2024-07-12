// Em JavaScript, o método reduce() é uma função de array extremamente poderosa e versátil que permite iterar sobre cada elemento de um array e acumular um valor único com base em uma operação personalizada. 
// Ele é útil quando você precisa reduzir (ou combinar) os elementos de um array em um único valor, como uma soma, média, concatenação de strings, entre outros.
  
const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 10, 13, 24];

const somaTudo = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    // console.log(acumulador);
    return acumulador;
}, 0); // importante colocarmos o 0, pois o acumulador sempre vem com o primeiro valor do array
console.log(somaTudo);

// função tradicional:
// function somaTudo(){
//     let soma = 0;
//     for(let numero of numeros)  {
//         soma += numero;
//     }
//     return soma;
// }
// console.log(somaTudo());


console.log(`####1`);

const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) {
        acumulador.push(valor);}
    return acumulador;
}, []);
console.log(pares);

console.log(`####2`);

const numeroEmDobro = numeros.reduce((acumulador, valor) => {   acumulador.push(valor * 2)
    return acumulador;
}, []);
console.log(numeroEmDobro);

const pessoas = [
    {nome: `Luiz`, idade: 62},
    {nome: `Maria`, idade: 23},
    {nome: `Eduardo`, idade: 55},
    {nome: `Leticia`, idade: 19},
    {nome: `Rosana`, idade: 32},
    {nome: `Wallace`, idade: 47}
];

console.log(`####3`);

const retornaMaior = numeros.reduce((acumulador, valor) => {  if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}); 
// como não especificamos o inicio do acumulador, ele obtém o valor do primeiro array
// valor é o obtém o segundo valor
// ele fazem comparações entre si, no final o que for maior retornará
console.log(numeroEmDobro);