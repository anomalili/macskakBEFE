class MacskaView {
    #elem;
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(szuloElem);
        this.#elem = elem;
        szuloElem.append(`div class= ""
                            <div class= "nev">${elem.nev}</div>
                            <div class= "szorszin">${elem.szorszin}</div>
                            <div class= "szuletesiEv">${elem.szuletesiEv}</div>
                            <div class= "nem">${elem.nem}</div>
                            <div class= "ivaros">${elem.ivaros}</div>
                            <div class= "napiAlvas">${elem.napiAlvas}</div>
                            <div class= "chip">${elem.chip}</div>
                            <div class= ""><button class="tetszik">Tetszik! ♥</button></div>
                        `)
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