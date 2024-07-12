// Em JavaScript, let, var e const são usadas para declarar variáveis, mas têm diferentes comportamentos e escopos. Aqui estão as principais diferenças entre elas:

// VAR:
// Escopo de Função: Variáveis declaradas com var têm escopo de função. Elas são acessíveis em qualquer lugar dentro da função onde foram declaradas, independentemente do bloco onde foram definidas.

// Copiar código
function exemploVar() {
    var x = 1;
  if (true) {
    var x = 5; //redeclarada
  }
  console.log(x); // 5
}
exemploVar();

// Hoisting: Variáveis declaradas com var são "hoisted" (elevadas) para o topo do seu escopo, mas a inicialização permanece no local original.

// Copiar código
console.log(y); // undefined
var y = 10;
// Redefinição: Você pode declarar a mesma variável várias vezes usando var sem erro.

// Copiar código
var z = 1;
var z = 2; // Não gera erro

// LET:

// Escopo de Bloco: Variáveis declaradas com let têm escopo de bloco, o que significa que são acessíveis apenas dentro do bloco {} onde foram declaradas.
function exemploLet() {
    
    if (true) {
    let a = 5;
    console.log(a); // 5
  }
//   console.log(a); // ReferenceError: a is not defined
}
exemploLet();

// Sem Hoisting: Embora variáveis let sejam elevadas, elas não são inicializadas. A tentativa de usá-las antes da declaração resulta em um erro de referência.
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// Redefinição: Você não pode declarar a mesma variável duas vezes no mesmo escopo usando let.
// let c = 1;
// let c = 2; // SyntaxError: Identifier 'c' has already been declared

var nome = `Luiz`;
var nome = `Otávio`;
console.log(nome);
// Na Variavel var, podemos redeclarar a variavel.

let nomePessoa = `Diego`;
nomePessoa = `Luis`;
console.log(nomePessoa);
// Já com let, não podemos redeclarar a mesma variavel, isso dar erro

let nomeSegundo = `Luiz`;
nomeSegundo = `Fabio`;
console.log(nomeSegundo);
// Não podemos declarar variavel sem o seu tipo, isso ocasionará erros futuramente.
