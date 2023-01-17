import MacskaView from "./macskaView.js";

class MacskakView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<main></main>`);
                            
        this.divElem = szuloElem.children("div");
        console.log(tomb);
        szuloElem.html(`
        <div class= "macskak">

            <div class="nev">Név</div>
            <div class="szorszin">Szőrszín</div>
            <div class="szuletesiEv">Születési év</div>
            <div class="nem">Nem</div>
            <div class="ivaros">Ivar</div>
            <div class="napiAlvas">Napi alvás</div>
            <div class="chip">Chip</div>
        </div>`);
     
        tomb.forEach(cica => {
            const macskaOBJ = new MacskaView(cica, szuloElem);
        });
    }
}

export default MacskakView;