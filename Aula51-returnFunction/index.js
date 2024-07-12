// O retorno de uma função em JavaScript é o valor ou os valores que a função "devolve" ao ponto onde foi chamada. Isso é feito usando a palavra-chave return. Quando a função executa uma declaração return, ela imediatamente para de executar e retorna o valor especificado. Se uma função não tem uma declaração return, ela retorna undefined por padrão.

// retorna um valor
// encerra a function
// function que retorna a soma de a + b
function soma(a, b) {
    return a + b;
}
console.log(soma(2, 7));

console.log(`####1`);

// function que Não retorna nada
function soma2(a, b) {
    console.log(a + b);
}
soma2(2, 7);

console.log(`####2`);


function criaPessoa(nome, sobrenome) {
    return `${nome} ${sobrenome}`; 
    // se no return fizermos template string, podemos adicionar as varias direto 
}
// não precisa passar os parametros como um objeto, pois ele já entende isso
const p1 = criaPessoa(`Luiz`, `Otávio`);

const p2 = {
    nome: `João`,
    sobrenome: `Oliveira`
};
console.log(p1);
console.log(p2);

console.log(`####3`);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ` ` + resto;
    }
    return falaResto;
}
const fala = falaFrase(`Olá`);
console.log(fala(`Mundo!`));
const resto = fala(`Mundo!`);
console.log(resto);

console.log(`####4`);

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };                                         
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2), triplica(3), quadriplica(4));