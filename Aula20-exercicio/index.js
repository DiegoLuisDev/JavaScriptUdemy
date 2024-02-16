function meuEscopo () {
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.result`);

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector(`.nome`).value;
        const sobrenome = form.querySelector(`.sobrenome`).value;
        const peso = form.querySelector(`.Peso`).value;
        const altura = form.querySelector(`.altura`).value;

        pessoas.push({
            nome: nome,    
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> Seu nome é ${nome}, seu sobrenome é ${sobrenome}, atualmente você pesa ${peso}kg e voçê mede ${altura}.</p>`;
    }
    
    form.addEventListener(`submit`, recebeEventoForm);
}

meuEscopo();
