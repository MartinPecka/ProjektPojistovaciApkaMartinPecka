'use strict';

class Seznam {

    constructor() {
        
        this.zaznamy = []; //pole, kde se ukládají data z inputů

        //šaháme na jednotlivé inputy, tlačítko a div, kde vypisujeme
        this.jmenoInput = document.getElementById("jmeno");
        this.prijmeniInput = document.getElementById("prijmeni");
        this.vekInput = document.getElementById("vek");
        this.telefonInput = document.getElementById("telefon");
        this.potvrditButton = document.getElementById("tlacitko");
        this.vypisElement = document.getElementById("seznam-pojistencu");

        this._nastavUdalosti();

    };
    
    _nastavUdalosti() { //klik na tlačítko uloží data z inputů do pole a spustí výpis zápisu
        this.potvrditButton.onclick = event => {
            const zaznam = new Zaznam(this.jmenoInput.value, this.prijmeniInput.value, this.vekInput.value, this.telefonInput.value);
            event.preventDefault(); //zamezí při kliku tlačítka refreshnout stránku
            
            //podmínka že telefonní číslo má 9 čísel, že jsou všechny políčka vyplněna
            if (this.jmenoInput.value !== "" && this.prijmeniInput.value !== "" && this.vekInput.value >= 1 && this.telefonInput.value.length === 9) {
                this.zaznamy.push(zaznam);
                this.vypisZaznamy();
                this.vycistiInput();
            } else {
                alert("Něco se pokazilo: Musí být vyplněná všechna políčka a telefonní číslo musí obsahovat 9 čísel!");
            }    
        };
    }
    
    vycistiInput() { //vyčistí políčka inputů
        this.jmenoInput.value = "";
        this.prijmeniInput.value = "";
        this.vekInput.value = "";
        this.telefonInput.value = "";
    };
    
    vypisZaznamy() {
        this.vypisElement.innerHTML = "";
        for (const jedenZaznam of this.zaznamy) {
            this.vypisElement.innerHTML += jedenZaznam;
        }
    }
    
}
