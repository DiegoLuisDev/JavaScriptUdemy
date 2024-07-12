// generator function é uma função especial que pode ser pausada e retomada durante sua execução. As funções geradoras são definidas usando a sintaxe function* e utilizam a palavra-chave yield para produzir valores de forma incremental.
function* geradora1 () {
    // código ...
    yield `Valor 1`;
    // código ...
    yield `Valor 2`;
    // código ...
    yield `Valor 3`;
    // o yield será como return, porém sempre obedecendo a ordem de chamada.
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next()); // na quarta vez ele retornará um objeto done: true

console.log(`####`);

// iteração sobre o generator function
const forG1 = geradora1();
for (let valor of forG1) {
    console.log(valor);
}

console.log(`####`);

function* geradora2() {
    let i = 1;

    while(i <= 2) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log(`####`);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

console.log(`####`);

// gerenting function retornará cada yield por vez que for chamada e continuará...
function* geradora5() {
    yield function() {
        console.log(`Y1`)
    }

    return function() {
        console.log(`return`);
    }
    // já com o return ela sairá da function e todos os yield depois não serão executados

    yield function() {
        console.log(`Y2`)
    }

}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();