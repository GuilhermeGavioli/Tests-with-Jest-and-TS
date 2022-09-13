import Pizza from "./Pizza";

it("should be able to create a pizza", ()=> {

    const firstPizza: Pizza = new Pizza({ partOne: 'mussarela', partTwo: 'mussarela' });
    const secondPizza: Pizza = new Pizza({ partOne: 'mussarela', partTwo: 'calabresa' });
    expect(firstPizza).toBeInstanceOf(Pizza);
    expect(secondPizza).toBeInstanceOf(Pizza);

})

it("should not be able to create a pizza that does not exits in the menu", () => { 
    expect(() => {
        new Pizza({ partOne: 'palmito', partTwo: 'chicken with onions' })
    }).toThrow(Error);
})