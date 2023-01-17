import Aszinkron from "../aszinkron";
import MacskaModell from "../model/macskaModel";

class AppController {
    constructor() {
        console.log("controller meghívódik");
        const token = $('meta[name="csrf-token"]').attr("content");
        const aszinkron = new Aszinkron(token);
        const model = new MacskaModell(token);
        console.log(token);
        let vegpont = "cica";
        aszinkron.adatBe(vegpont, this.megjelenit);
        model.adatBe(vegpont, this.megjelenit);
        $(window).on("click"), (event) => {
            model.adatBe(this.vegpont, event.detail);
        }
    }
    megjelenit(adat) {
        console.log(adat);
    }
} 



/* class AppController {
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
} */

export default AppController;