// Atribuição / Desestruturação
let a = `A`;
let b = `B`;
let c = `C`;

const letras = [b, c, a];

[a, b, c] = letras;

let bb = [c, a, b];

[a, b, c] = bb;

console.log(a, b, c);

//  indices: 1  2  3  4  5  6  7  8  9
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
// const primeiroNumero = numeros[1];
// const primeiroNumero = numeros[2];

// em vez disso, podemos fazer assim:

const numeros = [100, 200, 300, 400, 500, 600, 700];
const [um, ,tres, , cinco,  ...resto] = numeros; 
// a variavel resto(rest) pega o restante dos numeros
// spread espalhar/distribuir
// as virgulas vazias não pegam valor(elemento) nenhum

//                   0          1          2
//                  0  1  2    0  1  2    0  1  2
const numArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [primeiroArray, segundoArray, [ , ...oitoRes]] = numArray;
console.log(primeiroArray, segundoArray, oitoRes); 
// vai exibir o 5 do segundo indice

const [ , [ , , seis], [sete]] = numArray; 
// vai exibir o 6 da segunda lista, e 7 da terceira lista
console.log(seis, sete);

// fazendo de outra forma:
const [lista1, lista2, lista3] = numArray;
console.log(lista2[0]);