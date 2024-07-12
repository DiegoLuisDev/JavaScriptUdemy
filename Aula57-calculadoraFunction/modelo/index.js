function criaCalculadora() {
    return {
        display: document.querySelector(`.display`),

        inicia() {
            this.cliqueButtons();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaBackSpace(){
            this.display.addEventListener(`keydown`, e =>{
                if(e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener(`keyup`, el => {
                if(el.keyCode === 13) {
                    this.realizaCont();
                }
            });
        },

        realizaCont() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert(`Conta Inválida`);
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert(`Conta Inválida`);
                return;
            }
        },

        clearDisplay() {
            this.display.value = ``;
        },

        clearOne() {
            this.display.value = this.display.value.slice(0, - 1);
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        cliqueButtons() {
            // this -> calculadora
            // document.addEventListener(`click`, function(e)
            document.addEventListener(`click`, (e) => {
                // arrow function não muda o comportamento do this
                const el = e.target;

                if(el.classList.contains(`btn-num`)) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains(`btn-clear`)) {
                    this.clearDisplay();
                }

                if(el.classList.contains(`btn-del`)) {
                    this.clearOne();
                }

                if(el.classList.contains(`btn-eq`)) {
                    this.realizaCont();
                }

                this.display.focus();
            });
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();