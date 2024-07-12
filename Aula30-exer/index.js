// const h1 = document.querySelector(`.container h1`); // estamos indo buscar a o h1 usando querySelector
// const data = new Date(); // metodo

// function getDiaSemana (diaSemana){
//     let diaSemanaTxt;
//     switch (diaSemana) {
//         case 0 : diaSemanaTxt = `Domingo,`;
//         break;
//         case 1 : diaSemanaTxt = `Segunda-feira`;
//         break;
//         case 2 : diaSemanaTxt = `Terça-feira`;
//         break;
//         case 3 : diaSemanaTxt = `Quarta-feira`;
//         break;
//         case 4 : diaSemanaTxt = `Quinta-feira`;
//         break;
//         case 5 : diaSemanaTxt = `Sexta-feiral`;
//         break;
//         case 6 : diaSemanaTxt = `Sábado`;
//         break;
//         default: diaSemanaTxt = ``;
//         break;
//         }
//         return diaSemanaTxt;
// }

// refazendo a function getDiaSemana:
// function getDiaSemana (diaSemana) {
//     const dias = [`Domingo`, `Segunda`, `Terça`, `Quarta`, `Quinta`, `Sexta`, `Sábado`]
//     return dias[diaSemana];
// }

// function getMes (mes){
//         let meses;
//         switch (mes) {
//             case 0 : meses = `Janeiro`;
//             break;
//             case 1 : meses = `fevereiro`;
//             break;
//             case 2 : meses = `Março`;
//             break;
//             case 3 : meses = `Abriu`;
//             break;
//             case 4 : meses = `Maio`;
//             break;
//             case 5 : meses = `Junho`;
//             break;
//             case 6 : meses = `Julho`;
//             break;
//             case 7 : meses = `Agosto`;
//             break;
//             case 8 : meses = `Setembro`;
//             break;
//             case 9 : meses = `Outubro`;
//             break;
//             case 10 : meses = `Novembro`;
//             break;
//             case 11 : meses = `Dezembro`;
//             break;
//             default: meses = ``;
//             break;
//             }
//             return meses;
// }

// refazendo a function mes:

// refazendo a function getMes:
// function getMes (mes) {
//     const meses =  [`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`, `Setembro`, `Outubro`,`Novembro`,`Dezembro`];
//     return meses[mes];
// }

// function zeroAEsquerda (num){
//     return num >= 10 ? num : `0${num}`;
// }

// function criaData () { 
//      const diaDaSemana = data.getDay();
//      const numeroMes = data.getMonth();

//      const dia = getDiaSemana (diaSemana);
//      const mes = getMes (mes);

//      return (`${dia}, ${data.getDate} de ${mes} de ${data.getFullYear()} ${zeroAEsquerda (data.getHours())}:
//      ${zeroAEsquerda (data.getMinutes())}`);
// }



// podemos exibir o mesmo horário utilizando esse código (O PREFERIDO):

const h1 = document.querySelector(`.container h1`);
const data = new Date();
h1.innerHTML = data.toLocaleString(`pt-BR`,{dateStyle:`full`, timeStyle:`short`});

// dateStyle:define o estilo da parte da data a ser exibido
// `short` apresentada de forma abreviada, ou seja, com menos detalhes em comparação com outros estilos de tempo disponíveis, como 'medium', 'long', ou 'full'.

// TimeStyle: define o estilo da parte do tempo a ser exibido, `full` exibirá o tempo completo, incluindo horas, minutos e segundos.
 

// Ou poderiamos ter criado um objeto{}, e depois chamado ele dentro assim:
// h1.innerHTML = data.toLocaleString(`pt-BR`, opcoes);
// toLocaleDateString dará erro, pois ele exibe somente a data sem horário

// toLocaleDateString = exibe somente a DATA sem HÓRARIO
// toLocaleString = exibe a DATA com HÓRARIO

// poderiamos também fazer uma alteração, colocando o objeto dentro do toLocaleString():
// h1.innerHTML = data.toLocaleString(`pt-BR`, opcoes, {dateStyle:`full`, TimeStyle:`full`});


// poderiamos fazer assim também:

// const h1 = document.querySelector('.container h1'); 
// const data = new Date();
// const opcoes = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     timeZone: 'America/SaoPaulo' // Se necessário, ajuste o fuso horário
// };
// h1.innerHTML = data.toLocaleString('pt-BR', opcoes); // Alterado para toLocaleString()
