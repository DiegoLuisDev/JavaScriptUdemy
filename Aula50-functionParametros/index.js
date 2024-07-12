// Os parâmetros de função em JavaScript são valores que você pode passar para uma função para personalizar sua execução. Eles são definidos na declaração da função e podem ser utilizados dentro da função para realizar diversas operações. Parâmetros permitem que uma função opere sobre diferentes valores de entrada, tornando-a mais flexível e reutilizável.

// arguments que sustenta todos os argumentos enviados
// arguments somente funciona com function, com arrow não funciona

function oneFunc(a, b, c, d, e, f) {
    let total = 0;
    // arguments sustenta todos os parametros recebidos
    // arguments não funciona com arrowFunction
    for (let argumento of arguments) {
        total += argumento; 
    }
    console.log(total, a, b, c);
}
oneFunc( 0, 1, 2, 3, 4, 5, 6);

function twoFunc(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
    // underfined - quando a uma convergencia entre os parametros e argumentos
}
twoFunc(1, 2, 3); // quando falta valores, os valores que faltam mostrararam underfined

function treeFunc(a, b = 3) {
    console.log(a+b);
}
treeFunc(2);

function fourFunc(a, b = 2, c = 5) {
    // b = b || 0; - modelo antigo
    console.log(a + b + c);
};
fourFunc(2, undefined, 20); // underfined - será o unico que ele assumirá como b

function fiveFunc({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
const objT = {nome: `Luiz`, sobrenome:`Diego`, idade: 20};
fiveFunc(objT);

function sixFunc([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
const objG = [`Luiz`, `Diego`, 20];
sixFunc(objG);

function contaA(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        acumulador += numero;
    }
    console.log(acumulador);
}
contaA(`+`, 0, 20, 30, 40, 50);

// function express                       // rest operator
const contaB = function(operador, acumulador, ...numeros){              // não podemos adicinar nada depois do rest
    for (let numero of numeros) {
        if (operador === `+`) acumulador += numero;
        if (operador === `-`) acumulador -= numero;
        if (operador === `/`) acumulador /= numero;
        if (operador === `*`) acumulador *= numero;
    }
    console.log(acumulador);
};
contaB(`+`, 0, 20, 30, 40, 50);

// Com arrowFunction somente funcionará o rest operator, arguments dará erro
const contaC = (...args) => {  
    console.log(args);
};
contaC(`+`, 0, 20, 30, 40, 50);

