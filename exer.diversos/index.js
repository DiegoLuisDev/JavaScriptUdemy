/*function adicionar(){
let num1 = (window.document.getElementById(`usuario`).value);
let senha = parseInt(window.document.getElementById(`usuarioSenha`).value);

if( num1 === `Diego` || num1 === `diego` ){
    if (senha === 1234) {
        window.alert(`Seja Bem-Vindo!`);
    }
    else if (senha != 1234) {
        window.alert(`Digite sua senha`);
    }
}
else if( num1 != `Diego` || num1 != `diego`){
    window.alert(`Digite o usuário correto`)}


var book = {
    topic : "JavaScript",
    fat: true
}
console.log(book.topic)
console.log(book["fat"])
console.log(book.author = "Flanagan")
console.log(book.content = {}) }*/

var add = window.prompt(`digite seu nome`);
let use = document.getElementById(`use`);

document.body.innerHTML(`Seu nome é ${add}`)