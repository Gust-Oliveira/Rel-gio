let horasContainer = document.getElementById("horas");
let minutosContainer = document.getElementById("minutos");
let segundosContainer = document.getElementById("segundos");

let btn = document.getElementById("btn");

class Relogio {
    horas;
    minutos;
    segundos;

    constructor(){
        this.horas = "";
        this.minutos = "";
        this.segundos = "";      
    }

    atualizaTempo(){
        let time = new Date()
        
        this.horas = time.getHours();
        this.minutos = time.getMinutes();
        this.segundos = time.getSeconds();
    }

    showTime(){
        this.atualizaTempo();

        horasContainer.textContent = (this.horas >= 10)? this.horas : `0${this.horas}`;
        minutosContainer.textContent =(this.minutos >= 10)? this.minutos : `0${this.minutos}`;
        segundosContainer.textContent = (this.segundos >= 10)? this.segundos : `0${this.segundos}`;
    }
}

let MeuRelogio = new Relogio();

btn.addEventListener("click", (e) => {
    setInterval(() => {MeuRelogio.showTime()}, 1000);
})

