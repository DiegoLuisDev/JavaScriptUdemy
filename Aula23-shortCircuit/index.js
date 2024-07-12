/*
&& -> false && true -> false "O valor mesmo"
|| ->

Falsy
false
0
"" '' ``
null / underfined
NaN
*/

function falaOi () {
    return `Oi`;
};
const vaiExecutar = false;

console.log(vaiExecutar && falaOi());
console.log(typeof(`Luiz` && `ee` && `Maria`));
console.log(0 || false || null || `Diego` || true);

const corUsuario = null;
const corPadrao = corUsuario || `preto`;
console.log(corPadrao);

const a = 0;
const b = null;
const c = `false`;
const d = false;
const e = NaN;
console.log(a || b || c || d || e);