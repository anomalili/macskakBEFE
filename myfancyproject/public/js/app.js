import Aszinkron from "./model/aszinkron.js";

class App{
    constructor(){}

}


class AppController {
    constructor() {
        console.log("műkszilk");
        const token = $('meta[name="csrf-token"]').attr("content"); 
        const aszinkron = new Aszinkron(token);
        console.log(token);
        let vegpont = "cicay";
        aszinkron.adatBe(vegpont, this.megjelenit);
    }
    megjelenit(adat) {
        console.log(adat);
    }
}

new AppController();
