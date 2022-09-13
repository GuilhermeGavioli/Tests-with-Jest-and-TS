import Pizza from "./Pizza";

export default class Order {
    id: Number;
    body: Pizza[];
    date: Date;

    constructor(pizzas: Pizza[]) {
        if (pizzas.length < 1) throw new Error("Orders got to have a body [pizza]");
        this.id = 0;
        this.body = pizzas;
        this.date = new Date();
    }
}