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

// CONST:
// Escopo de Bloco: Assim como let, variáveis declaradas com const têm escopo de bloco.
function exemploConst() {
  if (true) {
    const d = 5;
    console.log(d); // 5
  }
  console.log(d); // ReferenceError: d is not defined
}
exemploConst();
// Sem Hoisting: Similar ao let, variáveis const são elevadas mas não inicializadas. A tentativa de usá-las antes da declaração resulta em um erro de referência.

// console.log(e); // ReferenceError: Cannot access 'e' before initialization
// const e = 10;
// Imutabilidade de Referência: Variáveis const devem ser inicializadas durante a declaração e não podem ser reatribuídas. No entanto, se a variável for um objeto ou array, as propriedades ou elementos podem ser modificados.

// const f = 5;
// f = 10; // TypeError: Assignment to constant variable.

// const obj = { nome: "João" };
// obj.nome = "Maria"; // Isso é permitido

// Redefinição: Similar ao let, você não pode declarar a mesma variável duas vezes no mesmo escopo usando const.
// const g = 1;
// const g = 2; // SyntaxError: Identifier 'g' has already been declared

// Resumo
// var: Escopo de função, hoisting com inicialização como undefined, permite redefinição.

// let: Escopo de bloco, hoisting sem inicialização, não permite redefinição no mesmo escopo.

// const: Escopo de bloco, hoisting sem inicialização, não permite redefinição ou reatribuição, mas permite modificar objetos e arrays.



let nome = `João`;

console.log(nome, ` nasceu em 1984`);
console.log(`Em 2000`, nome, `conheceu Maria`);
console.log(nome, ` Casou-se com Maria em 2012.`);
console.log(`Maria teve 1 filho com`, nome, `ele se chama Eduardo.`);

// concatenação  

// Não podemos criar variáveis com palavras reservadas
// Variaveis precisam ter nomes significativos
// Não podem começar com números
// Não podem conter espaços ou traços
// Utilizamos camelCase (Utilizamos para escrever codigo mais legiveis, começa com a primeira palavra minuscula e as de mais maiusculas)
// Case-sensitive(Palavras em maiusculos e minusculos tem diferença)
// Não podemos redeclarar variaveis com let
// Não utilize var, utilize let
let nomeCliente = `Luiz`;
nomeCliente = `Otávio`;
// Quando declaramos uma variavel com let, e depois queremos mudar o seu valor, não precisamos declarar let de novo
console.log(nomeCliente);
// A variavel let nomeCliente está sendo chamada, e o seu valor é Otávio
