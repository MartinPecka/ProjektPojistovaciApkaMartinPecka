'use strict';

//vlastnosti pojištěnce
class Zaznam {

    constructor(jmeno, prijmeni, vek, telefon) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.vek = vek;
        this.telefon = telefon;
    }

    toString() {
        return `Jméno: ${this.jmeno} ${this.prijmeni}<br> Věk: ${this.vek}<br> Telefon: +420 ${this.telefon}<hr><br>`;
    }
}