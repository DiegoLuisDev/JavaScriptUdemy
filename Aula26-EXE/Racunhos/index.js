function metodo () {
    const form = document.querySelector(`.formulario`);
        function exibirResultado () {
            const peso = Number(form.querySelector(`.peso`).value);
            const altura = Number(form.querySelector(`.altura`).value);

            if (!peso) {
            setResultado(`Peso inválido`, false);
            return
            }
            if (!altura) {
            setResultado(`Altura inválida`, false);
            return 
            }

            const imc = resultImc (peso, altura);
            const nivelImc = getnivelImc(imc);

            const msg = `Seu imc é ${imc} (${nivelImc}).`

            setResultado(msg, true);
        }
        
   
    form.addEventListener(`submit`, function (evento) {
        evento.preventDefault();
        exibirResultado();
    });

    document.addEventListener(`keydown`, function (evento){
        if (evento.key.toLowerCase() === `p`) {
            exibirResultado();
        }
    });

    function getnivelImc (imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    function resultImc (peso, altura) {
        const imc = peso / (altura **2);
        return imc.toFixed(2);
}

    function criaP () {
        const p = document.createElement(`p`);
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector(`.resultado`); 
        resultado.innerHTML = ``;
        const p = criaP();

        if (isValid) {
            p.classList.add(`green`);
        }
        else {
            p.classList.add(`bad`);
        }


        p.innerHTML = msg;
        resultado.appendChild(p);
    }
}

metodo();