function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== `string`) {
        reject(`cai no catch`);
        return
        }
        resolve(msg);
    })
}

async function executa() {
    try {
    const fase1 = await esperaAi(`Fase 1`, rand());
    console.log(fase1);

    const fase2 = await esperaAi(`Fase 2`, rand());
    console.log(fase2);

    const fase3 = await esperaAi(`Fase 3`, rand());
    console.log(fase3);

    console.log(`Terminamos na:`, fase3);
    } catch(e) {
        console.log(e);
    }
}
executa();

let minhaPromise = new Promise((resolve, reject) => {
        let sucesso = true; // Simulação de uma condição de sucesso
        if (sucesso) {
          resolve("A operação foi concluída com sucesso!");
        } else {
          reject("A operação falhou.");
        }
      });

async function minhaFuncao() {
    try {
      let resultado = await minhaPromise;
      console.log(resultado); // "A operação foi concluída com sucesso!"
    }
    catch (erro) {
      console.error(erro); // "A operação falhou."
    }
  }
  
minhaFuncao();

// esperaAi(`Fase 1`, rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAi(`Fase 2`, rand())
// }).then(valor => {
//     console.log(valor);
//     return esperaAi(`Fase 3`, rand())
// }).then(valor => {
//     console.log(valor);
//     return valor; // está retornando o valor que no caso é fase 3.
// }).then(valor => {
//      console.log(`Terminamos na fase:`, valor); // exibirá fase 3.
// })
// .catch(e => console.log(e))