// console.log(`Linha 0`);
// console.log(`Linha 1`);
// console.log(`Linha 2`);
// console.log(`Linha 3`);
// console.log(`Linha 4`);
// console.log(`Linha 5`);

// i - index 
for (let i = 0; i <= 50; i ++) {
    // console.log(`Linha ${i}`);
}
// criamos uma variavel, geralmente utilizando i, separado com ponto e virgula vem a condição, depois separamos novamente com ponto e virgula, vem o incremento, ou decremento.

// for para par
for (let i = 0; i <= 50; i ++) {
    const par = i;
    if ( i % 2 === 0){
        console.log(`par: ${i}`)
    } if (i % 2 === 1 ){
        // console.log(`impar: ${i}`)
        continue;
    }
}

// for para par ou impar
for (let a = 0;  a <= 10; a++){
    const impar = a % 2 === 0 ? `Par: ${a}`:`Impar: ${a}`;
    console.log(impar);
}


const frutas = { 1:`Banana`, 2:`Uva`, 3:`Maçã`, 4:`Goiaba`, 5:`Manga`, 6:`Laranja`};
// no objeto temos que adicionar as propriedades

const fruta = [`Banana`, `Uva`, `Maçã`, `Goiaba`,`Manga`, `Laranja`];

// for para percorrer um objeto
for (let i in frutas) {
    console.log(`Indice ${i}:`, frutas[i]);
}
// for para percorrer um array
for (let i in fruta) {
    console.log(`Indice ${i}:`, fruta[i]);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let pp of numeros) {
   const res = pp % 2 === 0 ? `Par: ${pp}`:`Impar: ${pp}`;
   if ( pp % 2 === 1) {
    console.log(`Pulei os impares heheh`)
    continue;
   } if ( pp === 6 ) {
    // break;
   }
    console.log(res)
}