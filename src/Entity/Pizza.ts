interface Flavors{
    partOne: String;
    partTwo: String;
}

export default class Pizza {
    flavors: Flavors;

    constructor(flavors: Flavors) {
        const valid = this.validateFlavors(flavors);
        if (!valid) {
            throw new Error("We do not have this flavor in our menu");
        } else {
            this.flavors = flavors;
        }
    }
    
    validateFlavors({partOne, partTwo}: Flavors): boolean {
        let isPartOneValid = false;
        let isPartTwoValid = false;
        let acceptablePizzaFlavors = AcceptablePizzaFlavors.get();

        acceptablePizzaFlavors.map(validFlavor => { 
            if (partOne.toLowerCase() == validFlavor) isPartOneValid = true;
            if (partTwo.toLowerCase() == validFlavor) isPartTwoValid = true;
        })

        if (isPartOneValid && isPartTwoValid) return true;
        return false;
    }
}


class AcceptablePizzaFlavors {
    static AcceptableFlavors: string[] = ["calabresa", "mussarela", "pepperoni", "palmito"];

    static get(): string[] {
        return AcceptablePizzaFlavors.AcceptableFlavors;
    }
} 