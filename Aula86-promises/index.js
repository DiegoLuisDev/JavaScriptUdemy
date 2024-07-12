// Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. As Promises são usadas para gerenciar operações assíncronas, como chamadas a APIs, leituras de arquivos, ou qualquer operação que precise esperar por algum tipo de resposta antes de continuar a execução do código.

// Uma Promise pode estar em um dos seguintes estados:

// Pending (Pendente): Estado inicial
// Fulfilled (Cumprida): A operação foi concluída com sucesso.
// Rejected (Rejeitada): A operação falhou.

let minhaPromise = new Promise((resolve, reject) => {
    let sucesso = true; // Simulação de uma condição de sucesso
  
    if (sucesso) {
      resolve("A operação foi concluída com sucesso!");
    } else {
      reject("A operação falhou.");
    }
  });
  
  minhaPromise.then((mensagem) => {
    console.log(mensagem); // "A operação foi concluída com sucesso!"
  }).catch((erro) => {
    console.error(erro); // "A operação falhou."
  });
  

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // resolve será tudo aquilo que
        if(typeof msg !== `string`) reject(`Valor Inválido`)
        setTimeout( () => {
           resolve(msg);
        }, tempo);
    })
}

esperaAi(`Frase1: Conexão com o BD `, rand())
.then(resposta => {
    // será do Frase 1
    console.log(resposta);// resposta exibirá a frase anterior
    return esperaAi(`Frase2: Buscando dados da Base`, rand());
})
.then(resposta => {
    // será do Frase 2
    console.log(resposta);
    return esperaAi(`Frase3: Tratando os dados`, rand()); // após ele detectar um erro ele irá para catch, e ignorará o resto
})
.then(resposta => {
    // será do Frase 3
    console.log(resposta);
})
.then(resposta => {
    console.log(`Exibe os dados na tela 4`);
})
.then(resposta => {
   return esperaAi(3, 4000)
})
.catch( e => {
    console.log(`ERRO`, e);
})
// console.log(`Exibe isso primeiro`); 

// function esperaAi(msg, tempo, cb) {
//     setTimeout( () => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }

// funções de calback
// esperaAi(`Frase 1`, rand(1, 4), function() {
//     esperaAi(`Frase 2`, rand(1, 4), function() {
//         esperaAi(`Frase 3`, rand(1, 4));
//     });
// });

function prom1(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== `string`) reject(`Erro`)
        setTimeout( (  ) => {
            resolve(msg);
        }, tempo)
    })
}

prom1(`Olá`, 100)
.then(resp => {
    console.log(resp);
    return prom1(`Mundo!`, 300);
})
.then(resp => {
    console.log(resp);
    return prom1(`Jesus`, 500);
})
.then(resp => {
    console.log(resp);
})
// catch capturará os erros
.catch(e => {
    console.log(`Error`, e)
})

// função numero aleatorio
function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}