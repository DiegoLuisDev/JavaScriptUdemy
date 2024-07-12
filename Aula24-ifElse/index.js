/*
if - Pode ser usado sozinho
else - Sempre que utilizo o else, sempre preciso de um if antes
else - Podemos usar somente um
if else - Podemos ter vários na checagem

*/

const hora = 66;

if (hora >= 0 && hora <= 11) {
    console.log(`Bom dia`);
} else if (hora >= 12 && hora <= 17) {
    console.log(`Boa Tarde`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite`);
} else {
    console.log(`Digite um horário válido`)
}

const tenhoGrana = true;
if (tenhoGrana) {
    console.log(`Vou sair`);
} else {
    console.log(`Não vou sair`);
}