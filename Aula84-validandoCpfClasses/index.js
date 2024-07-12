class validaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, `cpfLimpo`, {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, ``)
        })
    }

    eSequencia() {
        const sequencia = this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
        
        return sequencia;
    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica); // reverso(10) * stringNumerica(7), que vai ser somado a total
            reverso --; //reverso subtrai 1
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito): `0`;
    }

    geraCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = validaCPF.geraDigito(cpfSemDigitos); //
        const digito2 = validaCPF.geraDigito(cpfSemDigitos + digito1);//

        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== `string`) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraCPF();

        return this.novoCPF === this.cpfLimpo;
    }

}
const p1 = new validaCPF(`070.987.720-03`);

if(p1.valida()) {
    console.log(`CPF Válido!`);
} else {
    console.log(`CPF Inválido!`);
};