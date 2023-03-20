import { Order } from "./Order.js";
export declare class User {
    private _name;
    registrationDate: Date;
    orderHistory: Array<Order>;
    constructor(_name: string, registrationDate: Date, orderHistory: Array<Order>);
    get userName(): string;
    set newOrderHistory(newOrder: Order);
    print(): void;
}
