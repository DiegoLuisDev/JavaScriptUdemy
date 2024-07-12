// O valor de um Const será sempre o mesmo
// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não podem começar com números
// Não podem conter espaços ou traços
// Utilizamos camelCase (Estilo de escrita onde a primeira palavra começa com minusculo e as subsequentes em maiusculos)
// Case-sensitive(Palavras em maiusculos e minusculos tem diferença)
// Não podemos modificar o valor de uma constante
// Não utilize var, utilize const

// String = texto estará dentro de aspas
// Number = número estará sem nada

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

const primeiroNumero = `5`;
const segundoNumero = `10`;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado *3;

resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado)

console.log(typeof (primeiroNumero + segundoNumero));
