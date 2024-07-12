// 705.484.450-52 070.987.720-03

/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11- (237 % 11) = 5 (primeiro dígito)
se o dígito for maior que 9, consideramos 0.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284

11- (284 % 11) = 5 (Segundo dígito)
705.484.450-52 CPF VAlIDO!

Segundo exemplo

0x  7x  0x  9x  8x  7x  7x  2x  0x
10  9   8   7   6   5   4   3   2 
0   63  0   63  48  35  28  6   0 = 243

11- (243 % 11) = 10 (Primeiro dígito)

0x  7x  0x  9x  8x  7x  7x  2x  0x 0x
11  10  9   8   7   6   5   4   3   2 
0   70  0   72  56  42  35  8   0   0 = 283

11- (283 % 11) = 3 (Segundo dígito)
070.987.720-03 CPF VALIDO!
*/

// let cpf = `705.484.450-52`;
// let cpfLimpo = cpf.replace(/\D+/g, ``);
// console.log(cpfLimpo);
// let cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray);
// console.log(cpfArray.reduce((ac, val) => ac + Number(val),0));

function ValidaCPF(cpfEnviado) {
    let _cpfEnviado = cpfEnviado;

    Object.defineProperty(this,`cpfLimpo`, {
    // definindo cpfLimpo como propriedade e as suas configurações
        enumerable: true,
        get: function() {
            return _cpfEnviado.replace(/\D+/g, ``);
            // formata e retorna o CPF limpo (apenas dígitos)
        },
        set: function(novoCpf) {
            _cpfEnviado = novoCpf;
            // modifica o cpf
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === `undefined`) return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); 
    // removendo os 2 ultimos digitos
    const digito1 = this.criaDigito(cpfParcial); 
    // chamando criaDigito e mandando como parametros cpfParcial
    const digito2 = this.criaDigito(cpfParcial + digito1); 
    // chamando criaDigito de novo e manda agora cpfParcial + o digito1 que ele obteve


    const cpfNovo = cpfParcial + digito1 + digito2; // Juntando todo o cpf 
    return cpfNovo === this.cpfLimpo; // comparando com o cpf que foi enviado
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) { // recebe os 9 digitos que foi mandado por cpfParcial
    const cpfArray = Array.from(cpfParcial); // muda de string para array para iterarmos sobre ele
    let regressivo = cpfArray.length + 1; // adiciona + 1 para a contagem começar por 10
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val)); // multriplicando o numero de contagem (10 e reduzindo) com valor e adicionando ao acumulador
        regressivo--; // faz a contagem regressivamente, começando por 10 indo até 2. Quando ele é chamado novamente por digito2, o valor passa a ser 11
        return ac; //
    }, 0);

    const digito = 11 - (total % 11); //
    return digito > 9 ? `0` : digito; //
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); //
    return sequencia === this.cpfLimpo;
}

// instância
const cpf = new ValidaCPF(`070.987.720-03`);
// cpf.cpfLimpo =  '123.456.789-00';
// console.log(cpf.cpfLimpo);

// verificando se o metodo valida é verdade
if(cpf.valida()) { 
    console.log(`CPF Válido!`)
} else {console.log(`CPF Inválido`);}