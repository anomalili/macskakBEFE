import Aszinkron from "./aszinkron.js";
import MacskakView from "./view/macskakView.js";

class App {
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);
        $("#mutasdCicak").on("click", () => {
            let vegpont = "/cica";
            aszinkron.adatBe(vegpont, this.megjelenit);
        });
    }
    megjelenit(adat) {
        $("#cicakHelye").append(adat[0].nev);
        new MacskakView(adat, $("#cicakHelye") );
    }
}
new App();

class AppController {
    constructor() {
        console.log("műkszilk");
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);
        console.log(token);
        let vegpont = "cica";
        aszinkron.adatBe(vegpont, this.megjelenit);
    }
    megjelenit(adat) {
        console.log(adat);
    }
}

//new AppController();
