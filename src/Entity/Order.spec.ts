import Order from "./Order";
import Pizza from "./Pizza";

it("should create an order", () => { 
    const firstPizza: Pizza = new Pizza({ partOne: 'mussarela', partTwo: 'mussarela' });
    const secondPizza: Pizza = new Pizza({ partOne: 'mussarela', partTwo: 'calabresa' });

    const order = new Order([firstPizza, secondPizza]);
    expect(order).toBeInstanceOf(Order);

})

it("should not create an order", () => {
    expect(() => {
        new Order([]);
    }).toThrow(Error);

})