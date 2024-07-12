// Operador Ternario (condição) ? `Valor para verdadeiro` : `Valor para falso`;

const pontuaçãoUsuario = 1000;
const nivelUsuario = pontuaçãoUsuario >= 1000 ? `Usuario Vip` : `Usuario normal`;

const corUsuario = null;
const corPadrao = corUsuario || `Preta`;
// Se o usuario não mudou a cor, a cor padrao será preta