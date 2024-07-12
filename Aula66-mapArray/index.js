// Em JavaScript, o método map() é uma função de array que permite iterar sobre cada elemento de um array e aplicar uma função a cada um desses elementos, criando um novo array com os resultados dessas operações.
// Ele não modifica o array original, mas sim retorna um novo array com os resultados das transformações realizadas pela função de callback em cada elemento.
const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 10, 13, 24];
const numerosEmDobro = numeros.map(function(valor) {
    return valor * 2;
});
console.log(numerosEmDobro);

console.log(`#####1`)

const pessoas = [
    {nome: `Luiz`, idade: 62},
    {nome: `Maria`, idade: 23},
    {nome: `Eduardo`, idade: 55},
    {nome: `Leticia`, idade: 19},
    {nome: `Rosana`, idade: 32},
    {nome: `Wallace`, idade: 47}
];

    const revelaNome = pessoas.map(obj => obj.nome);
    //obj.nome[0] irá retorna apenas a primeira letra de cada nome
console.log(revelaNome[0]);
// para acessarmos o primeiro nome do obj, precisamos charma a variavel e pedir para mostra apenas o primeiro

console.log(`#####2`);

const idades = pessoas.map((obj) => {
    // delete obj.nome;
    // return obj;

    // também poderiamos retornar assim:
     return {idade: obj.idade};
});
console.log(idades);

console.log(`#####3`);

const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(pessoas);
console.log(comIds);