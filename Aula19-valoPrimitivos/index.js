/*
Primitivos (imutáveis) - String, number, boolean, underfined, null (bigint, symbol) - valores copiados
*/

let nome = `diegoluisfigueiredo`;
nome[0] = `a`;
console.log(nome);
// Não conseguimos alterar o nome, pois essa variavel tem valor primitivos que é imutável

/*
Referência (mutável) - array, object, function - passados por referência
*/

let a = [1, 2, 3];
let b = [...a];
// forma para copiar um valor, as mudanças que acontecerem no a não mudaram o b

let c = b;

a.push(4);
// console.log(a, b);

b.pop();
// console.log(a, b, c);
// b está copiando o valor de a, logo as alterações que acontecer no a, b não pegará
console.log(a, b, c);

const pessoa = {
    nome: `Luiz`,
    sobrenome:`Otavio`
};
let pessoa1 = pessoa;
// pessoa1 está copiando pessoa, logo todas alterações feitas em pessoa, pessoa1 será afetado
pessoa.nome = `João`;
console.log(pessoa1);