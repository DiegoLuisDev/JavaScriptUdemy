// Operadores em JavaScript são símbolos ou palavras reservadas que indicam uma operação a ser realizada sobre um ou mais operandos.
// Eles são usados para realizar cálculos, comparações, manipulações de valores e muitas outras tarefas. Aqui estão os principais tipos de operadores em JavaScript, juntamente com exemplos para cada tipo:
/* 
Ordem de operação
()
**
* / %
+ - 
*/

// incremento ++ também poderiamos escrever assim: ++contador, logo a adição seria antes
let contador = 1;
contador++
console.log(contador);

// decremento -- também poderiamos escrever assim: --contador, logo a subtração seria antes
let contador2 = 5;
contador2--
console.log(contador2);

// operadores de atribuição
/* const passo = 5;
let contador3 = 0;
contador3 += passo;
contador3 += passo;
console.log(contador3); 10
*/

let pas = 2;
let contador3 = 2;
contador3 *= pas;
contador3 *= pas;
contador3 *= pas;
console.log(contador3); 

// NaN - Not a Number - parseInt(inteiro) parseFloat(decimais)
const num1 = 10;
const num2 = Number(`5.2`);
console.log(num1 + num2);
console.log(typeof num2);

// Operadores Aritméticos
// Esses operadores são usados para realizar operações matemáticas.

// Adição (+):
// let a = 5;
// let b = 3;
// let soma = a + b; // 8

// Subtração (-):
// let subtracao = a - b; // 2

// Multiplicação (*):
// let multiplicacao = a * b; // 15

// Divisão (/):
// let divisao = a / b; // 1.6666666666666667

// Módulo (%) (resto da divisão):
// let modulo = a % b; // 2

// Exponenciação (**):
// let exponenciacao = a ** b; // 125


// Operadores de Atribuição
// Esses operadores são usados para atribuir valores a variáveis.

// Atribuição Simples (=):
// let x = 10;

// Atribuição de Adição (+=):
// x += 5; // x = x + 5; resultado: 15

// Atribuição de Subtração (-=):
// x -= 3; // x = x - 3; resultado: 12

// Atribuição de Multiplicação (*=):
// x *= 2; // x = x * 2; resultado: 24

// Atribuição de Divisão (/=):
// x /= 4; // x = x / 4; resultado: 6

// Atribuição de Módulo (%=):
// x %= 5; // x = x % 5; resultado: 1


// Operadores de Comparação
// Esses operadores são usados para comparar valores e retornam um valor booleano (true ou false).

// Igualdade (==):
// let igual = (a == b); // false

// Igualdade Estrita (===):
// let igualEstrito = (a === b); // false

// Desigualdade (!=):
// let diferente = (a != b); // true

// Desigualdade Estrita (!==):
// let diferenteEstrito = (a !== b); // true

// Maior que (>):
// let maior = (a > b); // true

// Maior ou Igual (>=):
// let maiorOuIgual = (a >= b); // true

// Menor que (<):
// let menor = (a < b); // false

// Menor ou Igual (<=):
// let menorOuIgual = (a <= b); // false


// Operadores Lógicos
// Esses operadores são usados para realizar operações lógicas, retornando um valor booleano.

// AND Lógico (&&):
// let andLogico = (a > 0 && b > 0); // true

// OR Lógico (||):
// let orLogico = (a > 0 || b < 0); // true

// NOT Lógico (!):
// let notLogico = !(a > 0); // false


// Operadores de Incremento e Decremento
// Esses operadores são usados para incrementar ou decrementar o valor de uma variável.

// Incremento (++):
// let i = 1;
// i++; // i = i + 1; resultado: 2

// Decremento (--):
// let j = 2;
// j--; // j = j - 1; resultado: 1


// Operador Ternário
// Esse operador é uma forma concisa de realizar uma operação condicional.

// Ternário (? :):
// let idade = 18;
// let mensagem = (idade >= 18) ? "Maior de idade" : "Menor de idade";
// mensagem = "Maior de idade"


// Operadores de Bitwise
// Esses operadores são usados para realizar operações bit a bit.

// AND (&):
// let andBitwise = 5 & 1; // 1

// OR (|):
// let orBitwise = 5 | 1; // 5

// XOR (^):
// let xorBitwise = 5 ^ 1; // 4

// NOT (~):
// let notBitwise = ~5; // -6

// Shift para a Esquerda (<<):
// let shiftEsquerda = 5 << 1; // 10

// Shift para a Direita (>>):
// let shiftDireita = 5 >> 1; // 2


// Operador de Espalhamento (Spread)
// Esse operador é usado para expandir elementos de um array ou propriedades de um objeto.

// Spread (...):
// let array = [1, 2, 3];
// let novoArray = [...array, 4, 5]; // [1, 2, 3, 4, 5]

// let objeto = { a: 1, b: 2 };
// let novoObjeto = { ...objeto, c: 3 }; // { a: 1, b: 2, c: 3 }

// Resumo
// Esses são os operadores mais comuns e úteis em JavaScript. Eles permitem a manipulação de dados de várias maneiras, desde operações matemáticas básicas até operações lógicas e manipulação de estruturas de dados complexas.