const form = document.querySelector(`#form`);
// está buscando o id="form"
form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    // forma para parar o envio do button, nela criamos uma addEventListener para o submit e uma function com e.preventDefault.
    const peso = Number(e.target.querySelector(`#peso`).value);
    const altura = Number(e.target.querySelector(`#altura`).value);

    if (!peso) {
        setResultado(`Peso inválido`, false)
        return;
    }
    if (!altura) {
        setResultado(`Altura inválida`, false)
        return;
    }
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true);
});

function setResultado (msg, isValid) {
    const resultado = document.querySelector(`#resultado`);
    resultado.innerHTML = ``;
    const p = criaP();

    if (isValid){
        p.classList.add(`paragrafo-result`);
    } else {
        p.classList.add(`bad`);
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function getNivelImc (imc) {
    const nivel = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`];

    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }
    
    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement(`p`);
    return p;
}