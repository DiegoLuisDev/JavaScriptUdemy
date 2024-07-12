function saudacao(nome) {
    return `Bom dia ${nome}!`;
}
const variavel = saudacao(`Diego`);
console.log(variavel);

function soma(x, y) {
    // soma(x = 1, y =1) { caso não envie os parametros, ou receba apenas 1 valor
    // const resultado 
    return x + y;
};
const resultado = soma(2, 2);
// depois do return a função será encerrada, logo tudo que estiver abaixo será ignorado
console.log(resultado);

const raiz = function(n) {
    return Math.sqrt(n);
};
console.log(raiz(9));
// podemos criar variaveis atribuir function a elas, detalhe que ela não precisa de nome e quando for chamar a function, chama a variavel e passa os parametros

const raizes = (n) => {
    return Math.sqrt(n);
};
console.log(raizes(9));
// Arrow function normal

const uliu = n => Math.sqrt(n);
console.log(uliu(9));
// arrow function simplificado, quando temos somente um parametro