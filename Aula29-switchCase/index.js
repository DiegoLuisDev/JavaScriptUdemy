
// if (diaDaSemana === 0) {
//     diaDaSemanaTxt = `Domingo`;
// } else if (diaDaSemana === 1){
//     diaSemanaTxt = `Segunda`;
// }else if (diaDaSemana === 2){
//     diaSemanaTxt = `Terça`;
// }else if (diaDaSemana === 3){
//     diaSemanaTxt = `Quarta`;
// }else if (diaDaSemana === 4){
//     diaSemanaTxt = `Quinta`;
// }else if (diaDaSemana === 5){
//     diaSemanaTxt = `Sexta`;
// }else if (diaDaSemana === 6){
//     diaSemanaTxt = `Sábado`;
// } else {
//     diaSemanaTxt = `Esse dia não existe`;
// }

// utilizando switch case:
const data = new Date();
let diaDaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto (diaDaSemana);

function getDiaSemanaTexto (diaDaSemana){
let diaSemanaTxt;
switch (diaDaSemana) {
    case 0 : diaSemanaTxt = `Domingo`;
    break;
    case 1 : diaSemanaTxt = `Segunda`;
    break;
    case 2 : diaSemanaTxt = `Terça`;
    break;
    case 3 : diaSemanaTxt = `Quarta`;
    break;
    case 4 : diaSemanaTxt = `Quinta`;
    break;
    case 5 : diaSemanaTxt = `Sexta`;
    break;
    case 6 : diaSemanaTxt = `Sábado`;
    break;
    default: diaSemanaTxt = ``;
    break;
    }
    return diaSemanaTxt;
}

console.log(diaDaSemana, diaSemanaTexto);
 
// também podemos utilizar o objetc literals: 
const dias = {
    0: `Domingo`,
    1: `Segunda`,
    2: `Terça`,
    3: `Quarta`,
    4: `Quinta`,
    5: `Sexta`,
    6: `Sábado`
}
console.log(diaDaSemana, dias[diaDaSemana]);