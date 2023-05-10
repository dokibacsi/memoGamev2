import { MEMOKEPLISTA } from "adat,js";

class Kartya{
    #kep
    #id
    #divElem
    #kepElem

    constructor(kartya, id, szuloElem){
        this.szuloElem = szuloElem
        this.id = id
        this.kartya = kartya

        szuloElem.append(`<div><img src=```)
    }

    getKep(){
        this.#kep = kep
        return kep
    }

    getId(){
        this.#id = id
        return id
    }

    setKepElem(){
        this.#kep = kep
    }

    kattintasTrigger(){
        const FELFORDIT = new CustomEvent("felfordit", {detail:this.id})
        window.dispatchEvent(FELFORDIT)
    }

}



export default Kartya