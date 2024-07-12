// Em JavaScript, alert e confirm são métodos usados para interagir com o usuário por meio de caixas de diálogo modais. Aqui estão as diferenças e usos de cada um:

// ALERT:
// O método alert exibe uma caixa de diálogo com uma mensagem e um botão "OK". É usado para fornecer informações ao usuário.

// alert(mensagem);

// Exemplo
// alert("Olá, mundo!");
// Características:

// Exibe apenas uma mensagem informativa.
// O usuário só tem a opção de clicar no botão "OK".
// É útil para notificações simples e mensagens de aviso.

// CONFIRM
// O método confirm exibe uma caixa de diálogo com uma mensagem, um botão "OK" e um botão "Cancel". É usado para solicitar uma confirmação do usuário.

// Sintaxe
// let resultado = confirm(mensagem);

// Exemplo
// let confirmacao = confirm("Você tem certeza que deseja continuar?");
// if (confirmacao) {
//   // O usuário clicou em "OK"
//   console.log("Usuário confirmou.");
// } else {
//   // O usuário clicou em "Cancel"
//   console.log("Usuário cancelou.");
// }

// Características:

// Exibe uma mensagem e pede uma confirmação do usuário.
// Retorna true se o usuário clicar em "OK" e false se o usuário clicar em "Cancel".
// É útil para confirmar ações críticas, como exclusão de dados ou envio de formulários.

// Resumo das Diferenças
// Propósito: alert é usado para exibir mensagens informativas, enquanto confirm é usado para solicitar uma confirmação do usuário.

// Interação do Usuário: alert tem apenas um botão "OK", enquanto confirm tem dois botões: "OK" e "Cancel".

// Retorno: alert não retorna valor, enquanto confirm retorna um valor booleano (true ou false) baseado na escolha do usuário.

let num1 = prompt(`Digite um número`);
let num2 = prompt(`Digite outro número`);
const resultado = Number(num1) + Number(num2);
window.alert(`O resultado é:  ${resultado}`);

// confirm irá retornar um valor boolean, (cancelar) será false, (ok) será true