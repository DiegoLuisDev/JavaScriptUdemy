//  Global 
// Quando uma função é definida dentro de outra função, a função interna (a closure) captura as variáveis do escopo da função externa. Mesmo após a função externa ter terminado sua execução, a função interna ainda mantém uma referência ao seu escopo lexical.

function retornaFuncao(nome) {
    return function(n) {
        return n + nome;
    };
}

const funcao = retornaFuncao(`Luiz`);
const funcao2 = retornaFuncao(`Joao`);

console.log(funcao(`Paulo `));
console.log(funcao2(`Diego `));

// closure simples
function outerFunction2() {
    var outerVariable = 'Eu sou da outerFunction';

    function innerFunction() {
        console.log(outerVariable)
    }

    return innerFunction;
}

var closureFunc2 = outerFunction2();
closureFunc2(); // Imprime: 'Eu sou da outerFunction'

// contador com closure
function createCounter() {
    let count = 0;

    function increment() {
        count ++
        return count;
    }

    return increment;
}

const counter = createCounter();

console.log(createCounter()); // imprime function
console.log(counter()); // imprime 1 

// Quando você chama createCounter(), você obtém a função increment, mas a execução de createCounter não incrementa count. count só é incrementado quando increment é chamada.

// Então quando atribuimos createCounter a counter, counter logo chamará increment. Logo quando chamamos counter(), increment é chamado e a conta é feita   

function outerFunction() {
    var sharedVariable = 0;

    return {
        increment: function() {
            sharedVariable++;
            return sharedVariable;
        },
        decrement: function() {
            sharedVariable--;
            return sharedVariable;
        }
    }
}

var counTer = outerFunction();
console.log(counTer.increment()); // Imprime: 1
console.log(counTer.decrement()); // Imprime: 0