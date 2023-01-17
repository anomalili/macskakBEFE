import Aszinkron from "./aszinkron.js";

class App {
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);
        $("#mutasdCicak").on("click", () => {
            let vegpont = "/cica";
            aszinkron.adatBe(vegpont, this.megjelenit(token));
        });
    }
    megjelenit(adat) {
        $("#cicakHelye").append(adat);
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
