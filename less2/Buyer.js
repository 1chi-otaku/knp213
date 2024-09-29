export default class Buyer {
    #name;
    #email;

    constructor(name, email) {
        this.#name = name;
        this.#email = email;
    }

    notifyAboutSale() {
        console.log(`Hey, ${this.#name}, we got a sale! Check your email: ${this.#email}.`);
    }
}