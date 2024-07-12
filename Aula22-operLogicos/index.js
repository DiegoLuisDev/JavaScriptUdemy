/*
Operadores Lógicos
&& - And - E - Todas as expressões precisam ser verdadeiras para retornar true
|| - Or - Ou - Qualquer uma que retornar que for verdadeiro, ele retorna true
! - Not - Não - Irá inverter (!false) = verdadeiro
*/

const expressãoAnd = false && true && true && true;
const expressãoOr = false || false;

const usuario = `Luiz`;
const senha = `12345`;

const vaiLogar = usuario === `Luiz` && senha === `12345`;
console.log(vaiLogar);