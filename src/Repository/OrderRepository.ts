import Order from "../Entity/Order";


export default interface OrderRepository{
    create(order: Order): Promise<void>;
    getOrders(): Order[];
}


export default class OrderRepositoryLocalMemory implements OrderRepository {
    orders: Order[] = [];

    async create(order: Order): Promise<void> {
        this.orders.push(order);
    }

    getOrders(): Order[] {
        return this.orders;
    }

 
}