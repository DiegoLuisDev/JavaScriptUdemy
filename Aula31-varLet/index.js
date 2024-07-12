// let tem escopo de bloco { ... bloco}
// var só tem escopo de função, não podemos chamar a var que foi criada dentro da função

const verdadeira = true;
let nome = `Luis`; // criando
var nome2 = `Luis`; // criando
// let nome = `Lui`; // Error: não podemos redeclarar let
var nome2 = `Luigh`; // redeclarando

if (verdadeira) {
    let nome = `Pedro`; // criando
    var nome2 = `Rel`; // redeclarando

if (verdadeira) {
    let nome = `Caio`; // criando
    }
}
console.log(nome2)
console.log(nome);  
// nome vai exibir `Luis` da parte de cima do código, e vai ignorar as outras(as que estão dentro do escopo)
// nome2 vai exibir `Rel` que está no escopo do primeiro if

function falaOi () {
    var sobrenome = `Filho`;

    if (verdadeira) {
    // const nome = `fabio`;
    // var nomee = `Charlie`;
    console.log(sobrenome);
    }
    // console.log(nomee); // podemos pegar variaveis dos escopos dentro das funções
}
falaOi();
// console.log(sobrenome); // Error: as variaveis que estão dentro da function, estão protegidas, não podem ser acessadas por alguém de fora

var pessoa;
console.log(pessoa); 
var pessoa = `Carlos`;

// Error: Hosting - não podemos chamar uma variavel sem antes ela ter sido atribuida
