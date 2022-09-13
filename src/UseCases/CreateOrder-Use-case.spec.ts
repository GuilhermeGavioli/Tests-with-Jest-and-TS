import Order from "../Entity/Order";
import Pizza from "../Entity/Pizza";
import OrderRepository from "../Repository/OrderRepository";
import CreateOrder from "./CreateOrder-Use-case"
import OrderRepositoryLocalMemory from '../Repository/OrderRepository'

it("should create an order use case succesfully", () => {
    const orderRepositoryMemory: OrderRepository = new OrderRepositoryLocalMemory()


    const createOrderUseCase = new CreateOrder(orderRepositoryMemory);



    const firstPizza = new Pizza({ partOne: 'palmito', partTwo: 'CaLaBrESA' });
    const secondPizza = new Pizza({ partOne: 'CALabreSA', partTwo: 'MUSSarelA' });

    const order = new Order([firstPizza, secondPizza]);
    
    const req = { order: order };

    const response = createOrderUseCase.execute(req);

    expect(response.success).toBe(true);
    expect(response.status).toBe(200);

    // expect(
    //     orderRepositoryMemory.getOrders()[0].body[0].flavors.partOne
    // ).toBe("palmito");


})