function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

// promises
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof tempo !== `number`) {
            reject(`Cai no catch`);
            return;
        }

        setTimeout( () => {
            if(typeof msg !== `string`) {
                reject(`Cai no catch`);
                return;
            }

           resolve(msg.toUpperCase() + ` Passei na promise`);
        }, tempo);
    });
}

const promises = [
    // `Primeiro valor`, 
    esperaAi(`Promise 1`, 2000),
    esperaAi(`Promise 2`, 1000),
    esperaAi(`Promise 3`, 3000),
    // esperaAi(2, 5000),  
    // `Outro valor`

    // caso tenha algum erro ele não exibirá nenhum valor
];

// retornará todos
Promise.all(promises)
.then( valor => {
    console.log(valor)
})
.catch( error => {
    console.log(error)
})

// retornará o primeiro valor resolvido
Promise.race(promises)
.then( valor => {
    console.log(valor)
})
.catch( error => {
    console.log(error)
})

// baixa pagina
function baixaPagina() {
    const cache = false;

    if(cache) {
        return Promise.resolve(`Página em cache`);
    } else {
        return esperaAi(`Baixei a página`, 2000)
    }
}

baixaPagina()
.then(dadoPg => {
    console.log(dadoPg);
})
.catch( e => {
    console.log(e)
})