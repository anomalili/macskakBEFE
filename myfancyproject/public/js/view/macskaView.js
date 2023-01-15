class MacskaView {
    #elem;
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(szuloElem);
        this.#elem = elem;
        szuloElem.append(`<div class = "sor">
                            <div>${elem.nev}</div>
                            <div>${elem.szorszin}</div>
                            <div>${elem.szuletesiEv}</div>
                            <div>${elem.nem}</div>
                            <div>${elem.ivaros}</div>
                            <div>${elem.napiAlvas}</div>
                            <div>${elem.chip}</div>
                            <div><button class="tetszik">Tetszik! ♥</button></div>
                        </div>`)
        this.recordElem = szuloElem.children(`tr:last-child`);
        this.kosarElem = this.recordElem.children("td:nth-child(5)").children("button");

        this.kosarElem.on("click", ()=> {
            console.log("kosárba")
            this.kattintasTrigger("kosarba");
        })
    }

    kattintasTrigger(esemenyNeve) {
        console.log(esemenyNeve)
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.ID})
        window.dispatchEvent(esemeny);
    }
}

export default MacskaView;