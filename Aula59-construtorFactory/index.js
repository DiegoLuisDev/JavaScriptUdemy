function Calculadora() {
    this.display = document.querySelector(`.display`);

    this.inicia = () => {
        this.cliqueButtons();
        this.pressionaBackSpace();
        this.pressionaEnter();
    };

    this.pressionaBackSpace = () => {
        this.display.addEventListener(`keydown`, e =>{
            if(e.keyCode === 8) {
                e.preventDefault();
                this.clearDisplay();
            }
        });
    }

    this.pressionaEnter = () => {
        this.display.addEventListener(`keyup`, el => {
            if(el.keyCode === 13) this.realizaCont();
        });
    }

    this.realizaCont = () => {

        try { // captura 
            conta = eval(this.display.value);

            if(!conta) {
                alert(`Conta Inválida`);
                return;
            }
            this.display.value = String(conta);
        } catch (e) { // captura o erro
            alert(`Conta Inválida`);
            return;
        }
    }

    this.clearDisplay = () => this.display.value = ``;

    this.clearOne = () => this.display.value = this.display.value.slice(0, - 1);

    this.addNumDisplay = (el) => this.display.value += el;

    this.cliqueButtons = () => {
        // this -> calculadora
        // document.addEventListener(`click`, function(e)
        document.addEventListener(`click`, event => {
            // arrow function não muda o comportamento do this
            const el = event.target;

            if(el.classList.contains(`btn-num`)) this.addNumDisplay(el.innerText);

            if(el.classList.contains(`btn-clear`)) this.clearDisplay();

            if(el.classList.contains(`btn-del`)) this.clearOne();

            if(el.classList.contains(`btn-eq`)) this.realizaCont();

            this.display.focus();
        });
    }
}

const calculadora = new Calculadora();
calculadora.inicia();