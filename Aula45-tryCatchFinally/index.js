// try {
//     // console.log(a);
//     console.log(`Abrir arquivo`);
//     console.log(`Tratar arquivo`);
//     console.log(`Fechar arquivo`);
//     try {
//         console.log(a);
//     } 
//     catch (e) {
//     console.log(`Deu erro`);
//     } 
//     finally {
//     console.log(`Também sou finally`);
//     }
// } 
//     catch (e) {
//     console.log(`Tratando o erro`);
// } 
//     finally {
//     console.log(`FINALLY: Eu sempre sou executado`);
// }

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
       throw new TypeError(`Esperando instância de Date.`);
}
    if (!data) {
        data = new Date();
}
    return data.toLocaleTimeString(`pt-BR`, {
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
        hour12: false
    });
}

try {
    const data = new Date(`01-01-1970 12:58:12`);
    const hora = retornaHora();
    console.log(hora);
} 
    catch(e) {
    // Tratar erro
    console.log(e)
} 
    finally {
    console.log(`Tenha um bom dia.`);
}
