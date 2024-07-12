//  IIFE -> Immediately invoked function express (Função expressa imediatamente invocada)

(function(idade, peso, altura) {

    const sobrenome = `Miranda`;
    function criaNome(nome) {
        const ab = nome + sobrenome + peso;
        console.log(ab);
    }

    function falaNome() {
        criaNome(`Luiz`);
    }

    falaNome();
    console.log(idade, peso, altura);
}) (30, 80, 1.80);

