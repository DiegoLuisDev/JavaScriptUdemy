let numero = Number(prompt(`Digite um número:`));
const numeroTitulo = window.document.getElementById(`numero`);
const texto = window.document.getElementById(`text`);
numeroTitulo.innerHTML = numero;

texto.innerHTML = ``;
let resultado = numero >= 0 ? Math.sqrt(numero).toFixed(2) : "Número inválido";
texto.innerHTML = `<p>Raiz quadrada: ${resultado}</p>`;

texto.innerHTML +=  `<p>${numero} é inteiro? ${Number.isInteger(numero)}`;

texto.innerHTML +=  `<p>É NaN? ${Number.isNaN(numero)}</p>`;

texto.innerHTML +=  `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;

texto.innerHTML +=  `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;

texto.innerHTML +=  `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;