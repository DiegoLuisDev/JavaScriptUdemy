class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, `cpfLimpo`, {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ``)
        })
    }

    valida() {
        if(typeof this.cpfLimpo !== `string`) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);

        const novoCpf = cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    // Utilizando reduce:
    // criaDigito(cpfParcial) {
    //     const cpfArray = Array.from(cpfParcial);
    //     let regressivo = cpfArray.length + 1;
    //     const total = cpfArray.reduce((ac, val) => {
    //         ac += (regressivo * Number(val));
    //         regressivo--;
    //         return ac;
    //     }, 0);

    criaDigito(cpfParcial){
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica); // reverso(10) * stringNumerica(7), que vai ser somado a total
            reverso --; //reverso subtrai 1
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito): `0`;
    }

    eSequencia() {
        const sequencia = this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
        
        return sequencia;
    }
}
window.ValidaCPF = ValidaCPF;
// const p1 = new ValidaCPF(`070.987.720-03`);

// if(p1.valida()) {
//     console.log(`CPF Válido!`);
// } else {
//     console.log(`CPF Inválido!`);
// };