// function falaImc() {

//     const form = document.querySelector(`form`);
//     const nomeInput = document.querySelector(`.nome`);
//     const sobrenomeInput = document.querySelector(`.sobrenome`);
//     const alturaInput = document.querySelector(`.altura`);
//     const pesoInput = document.querySelector(`.peso`);
//     const resultado = document.querySelector(`.resultado`);

//     form.addEventListener(`submit`, (e) => {
//         e.preventDefault();
//         exibeResultado();
//     });

//     function exibeResultado() {

//         const nome = nomeInput.value;
//         const sobrenome = sobrenomeInput.value;
//         const altura = Number(alturaInput.value);
//         const peso = Number(pesoInput.value);

//         if (!nome) {
//             setResultado(`Nome inválido`);
//             return;
//             }

//         if(!sobrenome) {
//             setResultado(`Sobrenome inválido`);
//             return;
//         }

//         // if(!altura) {
//         //     setResultado(`Altura inválida`);
//         //     return;
//         // }

//         // if(!peso) {
//         //     setResultado(`Peso inválido`);
//         //     return;
//         // }

//         // const imc = calculaImc(altura, peso);
//         const nomeCompleto = formataNome(nome, sobrenome);

//         const msg = `${nomeCompleto}`;

//         setResultado(msg);

//     }

//     form.addEventListener(`submit`, (e) => {
//         e.preventDefault();
//         if(verificaCampos()) {
//             exibeResultado();
//         }
//     });

//     function verificaCampos() {
//         const campos = [nomeInput, sobrenomeInput, alturaInput, pesoInput];
//         for (const campo of campos) {
//             if (!campo.value.trim()) {
//                 campo.focus();
//                 return false;
//             }
//         }
//         return true;
//     }

//     function formataNome(nome, sobrenome) {
//         return `${nome} ${sobrenome}`;
//     }

//     function calculaImc(altura, peso) {
//         const imc = peso / (altura ** 2);
//         return imc.toFixed(2);
//     }

//     function criaP() {
//         const p = document.createElement(`p`);
//         return p;
//     }

//     function setResultado(msg) {
//         const p = criaP();
//         p.innerHTML = msg;
//         resultado.appendChild(p);
//     }

// }

// falaImc();


// ValidaCPF com constructor

// function ValidaCPF(cpfEnviado) {

//     Object.defineProperty(this, `cpfLimpo`, {
//         enumerable: true,
//         get: function() {
//             return cpfEnviado.replace(/\D+/g, ``);
//         }
//     });
// }
// ValidaCPF.prototype.valida = function() {
//     if(this.cpfLimpo === `underfined`) return false;
//     if(this.cpfLimpo.length !== 11) return false;
//     if(this.isSequencia()) return false;

//     const cpfParcial = this.cpfLimpo.slice(0, -2);
    
//     const digito1 = this.criaDigito(cpfParcial);
//     const digito2 = this.criaDigito(cpfParcial + digito1);
   
//     const novoCpf = cpfParcial + digito1 + digito2;
//     return novoCpf === this.cpfLimpo;
    
// };
// ValidaCPF.prototype.criaDigito = function(cpfParcial) {
//     const arrayCpf = Array.from(cpfParcial);
//     let regressivo = arrayCpf.length + 1;
//     let total = arrayCpf.reduce((ac, val) => {
//          ac += (regressivo * Number(val));
//          regressivo--;
//         return ac;
//     }, 0);

//     const digito = 11 - (total % 11);
//     return digito > 9 ? `0`: digito;
// };
// ValidaCPF.prototype.isSequencia = function() {
//     const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
//     return sequencia === this.cpfLimpo;
// };

// const cpf = new ValidaCPF(`111.111.111-11`);
// if(cpf.valida()) {
//     console.log(`CPF Válido`)
// } else {
//     console.log(`CPF Inválido`)
// }

// ValidaCPF com class

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, `cpfLimpo`, {
            // writable: false,
            // enumerable: false,
            // configurable: false,
            value: cpfEnviado.replace(/\D+/g, ``)
        })
    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        let digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : `0`;
    }

    geraCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);

        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(typeof this.cpfLimpo !== `string`) return false;
        if(this.eSequencia()) return false;
        this.geraCPF();

       return this.novoCPF === this.cpfLimpo;
    }

    eSequencia() {
        const sequencia = this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
        return sequencia;
    }
}

const p1 = new ValidaCPF(`070.987.720-03`);
if(p1.valida()) {
    console.log(`CPF Válido`);
} else {
    console.log(`CPF Inválido`);
}

p1.cpfLimpo = `111.111.111-11` // não muda, por que o writable está false
// console.log(p1.cpfLimpo);

class CPF extends ValidaCPF {
    constructor(cpfLimpo, cpf) {
        super(cpfLimpo)
        // this.cpf = cpf;
        Object.defineProperty(this, `cpf`, {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf
        })
    }
}

const c1 = new CPF(`070.987.720-03`, 122);
if(c1.valida()) {
    console.log(`CPF Válido`);
} else {
    console.log(`CPF Inválido`);
}
c1.cpf = 111; // erro: writable está false
console.log(c1);