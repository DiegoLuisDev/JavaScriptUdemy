// let umaString = ´´Um \´´texto\`` ``; (quando colocamos as barras invertidas podemos colocar aspas duplas tanto no frase quanto no fechamento)
            //   01234567
let umaString = `Um texto`;
console.log(umaString[3]); 
// (ele vai encontrar qual letra está no indice [3] no caso aqui: t, caso seja um indice que não tenha letra irá aparecer undefined)

console.log(umaString.charAt(3))
// irá fazer a mesma coisa que os [], que é mostra qual letra está no indice que especificamos

console.log(umaString.concat(` em um lindo dia.`));
// faz a concatenação
console.log(umaString + `em um lindo dia.`);
// concatenação com o sinal de +
console.log(`${umaString} em um lindo dia.`);
// template string
// usamos códigos diferentes para escrever a mesma coisa

console.log(umaString.indexOf(`m`, 0))
// indexof irá procurar em qual indice que a letra `t` começa, com isso podemos achar em qual indice está a primeira palavra que queremos, nesse caso o `t`
// se colocarmos virgula e um número, esse número irá especificar em qual indice ela vai iniciar a procura

console.log(umaString.lastIndexOf(`m`, 3))
// lastIndexOf irá procurar em qual indice está a palavra especificada, porém de trás para frente, no caso ela começa da direita para a esquerda, o número irá dizer de onde ela irá começar, no caso ela irá começar no indice 3, e começara a procurar de lá para trás 

console.log(umaString.search(/m/));
// .search irá encontrar qual indice está tal letra

console.log(umaString.replace(`Um`, `Outra`));
// .replace irá mudar a palavra outra na string, poderiamos escrever assim:
// console.log(umaString.replace(/Um/, `Outra`));

let twoString = `O rato roeu a roupa do rei de roma`;
console.log(twoString.replace(/r/, `a`));
// Irá mudar a apenas a primeira palavra ou letra que ele encontra
console.log(twoString.replace(/r/g, `a`));
// já quando adicionamos o g, ela irá mudar o (r) pelo (a) em todas as palavras que tiverem (r)

console.log(twoString.length);
// .length irá mostrar o tamanho da string, ele mostra quanto caracteres tem na string, começando por 1

console.log(twoString.slice(2, 6));
// .slice irá mostrar quais caracteres começando no indice 2, e terminando no 6, nesse caso (rato)

console.log(twoString.slice(-4));
// Ele irá começar do final da string, e mostrará o que estão nos últimos 4 indices

console.log(twoString.substring(twoString.length - 4, twoString.length -1));
// faz a mesma coisa que o .slice, porém escrevemos mais códigos

console.log(twoString.split(` `, 3));
// .split fazemos com que ele busque os 3 primeiros indices, separados por espaço

console.log(twoString.toUpperCase());
// mostrará tudo em MAIUSCULO

console.log(twoString.toLowerCase());
// mostrará tudo em minusculo