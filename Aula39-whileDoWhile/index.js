const nome = `Luiz`;

let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

// função para gerar um número aleatorio e retornará um número inteiro
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
// let rand = random(min , max);
let rand = 10;

while(rand !== 10) {
    rand = random(min, max);
    // console.log(rand);
}
// nesse caso o while não executará pois a condição é falso

console.log(`##########`)
// a diferença entre while e doWhile está na condição, onde o while checa primeiro a condição, já o doWhile executa o bloco e depois checa a condição.
do {
    // rand = random(min, max);
    console.log(rand);
} while(rand !== 10);
// o doWhile executará o bloco mostrando o valor de 10