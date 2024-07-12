/*function adicionar(){
let num1 = (window.document.getElementById(`usuario`).value);
let senha = parseInt(window.document.getElementById(`usuarioSenha`).value);

if( num1 === `Diego` || num1 === `diego` ){
    if (senha === 1234) {
        window.alert(`Seja Bem-Vindo!`);
    }
    else if (senha != 1234) {
        window.alert(`Digite sua senha`);
    }
}
else if( num1 != `Diego` || num1 != `diego`){
    window.alert(`Digite o usuário correto`)}


var book = {
    topic : "JavaScript",
    fat: true
}
console.log(book.topic)
console.log(book["fat"])
console.log(book.author = "Flanagan")
console.log(book.content = {}) }*/

// var add = window.prompt(`digite seu nome`);
// let use = document.getElementById(`use`);

// document.body.innerHTML(`Seu nome é ${add}`)

// const peso = 80;
// const altura = 1.8;

// const alt = altura * altura;
// imc = peso / alt
// console.log(imc);

// function setResultado(msg) {
//     const resultado = document.querySelector(`#resultado`);
//     resultado.innerHTML = ``;
//     // remove todo o conteudo que está na div resultado
//     const p = document.createElement(`p`);
//     // cria um novo paragrafo
//     p.classList.add(`paragrafo-result`);
//     // adiciona um class chamada paragrafo
//     p.innerHTML = `Qualquer coisa`;
//     // irá exibir qualquer coisa na div resultado
//     resultado.appendChild(p);
//     // Adiciona o parágrafo criado ao elemento com id resultado como um filho, usando resultado.appendChild(p)
// }

// const umMinuto = 60 * 1000;
// const data = new Date(`2023, 12, 19 00:00:01`);

// let tempo = data.getTime(); // pega a data que está na variavel data e atruibui a tempo
// tempo += umMinuto; // soma 60.000 a data atual

// data.setTime(tempo); // Ajusta a data já com os minutos

// console.log(data);

// const elementos = [
//     {tag: `p`, texto: `1 Texto`},
//     {tag: `div`, texto: `2 Texto`}, 
//     {tag: `section`, texto: `3 Texto`},
//     {tag: `footer`, texto: `4 Texto`},
// ];

// const container = document.querySelector(`.container`);


// for (let i = 0; i < elementos.length; i++) {
//     let {tag, texto} = elementos[i];
//     let tagCriada = document.createElement(tag);
//     let textoCriado = document.createTextNode(texto);
//     tagCriada.appendChild(textoCriado)
//     container.appendChild(tagCriada);
// }


// function recebe (dat) {
//     if(dat) {
        
//         return `Oi`;
//     }
// }

// const Our = (recebe(2));
// console.log(Our, typeof recebe());


// function getTimerSeconds (seconds) {
//     const data = new Date(seconds * 1000);
//     return data.toLocaleTimeString(`pt-BR`, {
//         hour12: false,
//         timeZone: `UTC`
//     });
// }

// console.log(getTimerSeconds(62));

// const dataAtual = new Date();

// function formataData (Hoje) {
//     const dia = Hoje.getDate();
//     const mes = Hoje.getMonth();
//     return `Hoje é dia: ${dia}, do mês: ${mes}`;
// }

// const dataHoje = formataData(dataAtual);
// console.log(dataHoje);

// const calculadora = {
//     somar: function(valor) { return valor + valor},
//     duplicar: function(valor) { return valor * 2 }
// }

// const soma = calculadora[`somar`];
// console.log(soma(4));


// const date = new Date();
// const timeString = date.toLocaleTimeString('pt-BR', {hour12: false});
// console.log(timeString);


// const arr = [`a`, `b`, `c`, `d`];

// for (const aa of arr) {
//     console.log(aa);
// }

// const pessoas = {1: `Diego`, 2: 11, 3: `Sim` };

// const {1: primeiro, 2: segundo} = pessoas;
// console.log(primeiro, segundo);

// let num1 = 9.70;
// // num2 = Number(num1.toFixed(2));
// console.log(num1.toFixed(2));
// let i = 0;
// while(i == 10) {
//     i++
//     console.log(i);
// }

// function saudacao(nome, callback) {
//     console.log('Olá ' + nome);
//     callback();
// }

// function dizerAdeus() {
//     console.log('Adeus!');
// }

// saudacao('João', dizerAdeus);

// function Conta(agencia, conta, saldo) {
//     this.agencia = agencia;
//     this.conta = conta;
//     this.saldo = saldo;
// };

// Conta.prototype.verSaldo = function() {
//     console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: ${this.saldo}`)
// };

// Conta.prototype.sacar = function(valor) {
//     if(this.saldo < valor) {
//         console.log(`Saldo Insuficiente: ${this.saldo}`);
//         return;
//     }
//     this.saldo -= valor;
//     this.verSaldo();
// };

// Conta.prototype.depositar = function(valor) {
//     this.saldo += valor;
//     this.verSaldo();
// };

// const c1 = new Conta(1, 2, 10);
// c1.verSaldo();
// c1.sacar(1);
// c1.depositar(1);

// function CC(agencia, conta, saldo, limite) {
//     Conta.call(this, agencia, conta, saldo);
//     this.limite = limite;
// };

// CC.prototype = Object.create(Conta.prototype);
// CC.prototype.constructor = CC;

// CC.prototype.sacar = function(valor) {
//     if(this.saldo + this.limite < valor) {
//         console.log(`Saldo Insuficiente: ${this.saldo}`);
//         return;
//     }
//     this.saldo -= valor;
//     this.verSaldo();
// };

// const c2 = new CC(1, 2, 10, 10);
// c2.sacar(20);
// c2.sacar(2);
// c2.sacar(2);

(function recebe() {
    console.log(`recebe 1 executada!`);
    recebe2();
})()

function recebe2() {
    console.log(`recebe 2 executada!`);
    recebe3();
}

function recebe3() {
    console.log(`recebe 3 executada!`);
}