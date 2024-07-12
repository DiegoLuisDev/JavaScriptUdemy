// Declaração de função (Function hoisting)
// Hoisting: Declarações de função em JavaScript são "elevadas" (hoisted) para o topo do seu escopo, o que significa que você pode chamar a função antes mesmo de declará-la no código.

falaOi();
function falaOi() {
    console.log(`Oie`);
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log(`sou um dado`);
};
souUmDado();

// Arrow function
//hoisting não funcionará com arrowFunction
const funcaoArrow = () => {
    console.log(`Sou um arrow function`);
    // podemos retornar funções dentro de funções
    return souUmDado();
};
funcaoArrow(); 


// Dentro de um objeto
const obj = {
    falar: function () {
        console.log(`Estou falando...`)
    }
};
obj.falar(); // anotação de ponto

// podemos decla
const aFunçao = function () {
    console.log(`olá`)
};
const setInterval = ( aFunçao(), 1000);
