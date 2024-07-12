// Ler a documentação da MDN JavaScript Date

// new Date é a forma para adicionar data, dia, hora, minutos, segundos em JavaScript

// "época Unix" (1 de janeiro de 1970 00:00:00 UTC)

// const tresHoras = 60 * 60 * 3 * 1000; - 60 segundos * 60 minutos = 3.600 (equivale 1 hora) * 3 = 10.800 (3 horas) * 1000 = 10.800.000 milisegundos

// const umDia = 60 * 60 * 24 * 1000; - 60 (segundos) * 60 (minutos) = 3.600(equivale 1 hora) * 24 = 86.400 (1 dia) * 1000 = 86.400.000 (1 dia em milisegundos)

// const data = new Date(0 + tresHoras + umDia); 
// 01/01/1970 Timestamp unix ou época unix

// o mês começa do 0 até 11

// quando não especificamos ele completa com hora ou o primeiro dia 

// const data = new Date(2020, 0, 2); // a, m, d, h, M,seg, ms

// geralmente veremos datas nesse formato:
// const data = new Date(`2023, 12, 19 00:00:00.1000`); 

// forma para adicionar anos a data:
// const data = new Date(`2023, 12, 19 00:00:01`);
// data.setFullYear(data.getFullYear() + 1);
// console.log(data.toString());
// podemos usar essa base para adicionarmos ano, mês, dia, hora, segundos... 

// const dataDeHoje = new Date();
// console.log(dataDeHoje.toString())
// const data = new Date(1708996274276); // formato em que bases de dados utilizam as datas
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay() + 1); // começa do 0 = domingo, 6 = sabado
// console.log(`Data em milesimos de segundos:`+ Date.now()); // a data de hoje em milesimos de segundos]

// uma forma para informar qual é o dia da semana:
// const data = new Date();
// const diaDaSemana = data.getDay();
// const semana = [`Domingo`, `Segunda`, `Terça`, `Quarta`, `Quinta`, `Sexta` ,`Sábado`]
// console.log(semana[diaDaSemana])

const dataAtual = new Date().toLocaleDateString(`pt-BR`);
console.log(dataAtual)

function formataData (dataHoje) {
   const dia = zeroAesquerda(dataHoje.getDate());
   const mes = zeroAesquerda(dataHoje.getMonth() + 1);
   const ano = zeroAesquerda(dataHoje.getFullYear());
   const hora = zeroAesquerda(dataHoje.getHours());
   const minuto = zeroAesquerda(dataHoje.getMinutes());
   const segundos = zeroAesquerda(dataHoje.getSeconds());

   return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`;
}

function zeroAesquerda (num) {
    return num <= 9 ? `0${num}`: num ;
}

const dataHoje = new Date();
const dataBrasil = formataData(dataHoje);
console.log(dataBrasil);

