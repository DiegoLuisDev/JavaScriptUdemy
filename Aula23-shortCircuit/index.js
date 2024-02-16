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
// console.log(`Luiz` && NaN && `Maria`);

function falaOi () {
    return `Oi`;
}
const vaiExecutar = false;

console.log(vaiExecutar && falaOi());