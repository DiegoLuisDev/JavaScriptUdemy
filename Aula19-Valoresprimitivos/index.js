/*
Primitivos (imutáveis) - String, number, boolean, underfined, null (bigint, symbol)
*/

let nome = `diegoluisfigueiredo`;
nome[0] = `a`;
console.log(nome);
// Não conseguimos alterar o nome, pois essa variavel tem valor primitivos que é imutável

/*
Referência (mutável) - array, object, function
*/

let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);
a.push(4);
// console.log(a, b);
b.pop();
// console.log(a, b, c);
// b está copiando o valor de a, logo as alterações que acontecer no a, b não pegará

const pessoa = {
    nome: `Luiz`,
    sobrenome:`Otavio`
};
let pessoa1 = pessoa;
pessoa.nome = `João`;
console.log(pessoa1);