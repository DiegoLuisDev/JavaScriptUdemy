function relogio() {
const relogio = document.querySelector(`.relogio`);
// não precisa pegar os inputs, pois com a função do addEventListener, ele verá de qual input vem o click
// const iniciar = document.querySelector(`.iniciar`);
// const pausar = document.querySelector(`.pausar`);
// const zerar = document.querySelector(`.zerar`);
let segundos = 0;
let timer;

// função para formatar a hora e obter apenas os segundos
function getTimerSeconds (seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString(`pt-BR`, {
        hour12: false,
        timeZone: `UTC`
    });
}
// funcão que iniciará a contagem, recebe os segundos já formatados
function iniciaRelogio () {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimerSeconds(segundos);
    }, 1000);
}

// para obter o input de forma simples:
document.addEventListener(`click`, function(e) {
    const el = e.target;

    if(el.classList.contains(`iniciar`)) {
        relogio.classList.remove(`pausado`);
        clearInterval(timer);
        iniciaRelogio();
    }
    if(el.classList.contains(`pausar`)) {
        clearInterval(timer);
        relogio.classList.add(`pausado`);
    }
    if(el.classList.contains(`zerar`)) {
        relogio.classList.remove(`pausado`);
        clearInterval(timer);
        relogio.innerHTML = `00:00:00`;
    }
    
    // para obter o input da forma normal(dessa forma teriamos que criar as variaveis):
    // iniciar.addEventListener(`click`, function(event) {
    //     relogio.classList.remove(`pausado`);
    //     clearInterval(timer);
    //     iniciaRelogio();
    // });
    // pausar.addEventListener(`click`, function(event) {
    //     clearInterval(timer);
    //     relogio.classList.add(`pausado`);
    // });
    // zerar.addEventListener(`click`, function(event) {
    //     clearInterval(timer);
    //     relogio.innerHTML = `00:00:00`;
    //     segundos = 0;
    // });
    });
}
relogio();

