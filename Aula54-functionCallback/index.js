// callback function (função de retorno) em JavaScript é uma função que é passada como argumento para outra função e que é executada depois que a função principal é completada.
// controle assíncrono: Permite que você controle a ordem de execução das operações, especialmente quando lida com operações assíncronas.
// reutilização de código: Funções podem ser reutilizadas em diferentes contextos passando-as como callbacks.

// exemplo clássico
function saudacao(nome, callback) {
    console.log('Olá ' + nome);
    callback();
}

function dizerAdeus() {
    console.log('Adeus!');
}

saudacao('João', dizerAdeus);

console.log(`#####1`);

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log(`f1`);
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log(`f2`);
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log(`f3`);
        if (callback) callback();
    }, rand());
}

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log(`Olá Mundo!`);
//         });
//     });
// });

// uma forma melhor de fazer:
f1(f1callback);
function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    setTimeout(function() {
        console.log(`Olá Mundo!`);
    }, rand());
}
