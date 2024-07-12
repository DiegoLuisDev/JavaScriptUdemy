function soma (x, y) {
    if (typeof x !== `number` ||
        typeof y !== `number`) {
    throw new TypeError(`x e y precisam ser numbers`)
    }
    // caso valor não seja um number, o throw registrará (pasta, arquivo, linha) de onde está esse erro
    return x + y;
    // caso o valor seja um number ele somará normalmente
}
try {
    console.log(soma(1, 2));
    console.log(soma(`1`, 2));
    // try é executada quando não há erros, porém se tiver algum erro cairá no catch
} catch(error){
    // O catch é executado quando há erros, e ele decidirá o que fazer, se mostrará o erro ao usúario, ou ao banco de dados...

    // console.log(error)
    console.log(`Alguma coisa mais amigável`)
}