import Order from "../Entity/Order";
import OrderRepository from "../Repository/OrderRepository";

interface Request{
    order: Order;
}

interface Response{
    success: boolean
    error?: Error
    status: Number;
    message: String;
}

export default class CreateOrder {
    orderRepository: OrderRepository

    constructor(orderRepository: OrderRepository) {
        this.orderRepository = orderRepository;
    }
    
    execute(request: Request): Response {
        this.orderRepository.create(request.order);
        return {
            success: true,
            status: 200,
            message: "Your order has been succesfully sent"
        }
    }
}