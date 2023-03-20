import { Order } from "./Order.js";

//декоратор для добавления поля id (скопировала код из документации, но не понимаю, что это: { new(...args: any[]): {} } )
function randomId<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        id = (Math.random() * 10).toFixed(0);
    };
}

//декоратор для запрета изменения registrationDate - не работает
function freezeDate(target: Object, propertyKey: string) {
    Object.defineProperty(target, 'redgistrationDate', {
        configurable: false
    })
}

@randomId
export class User {
    private _name: string;

    @freezeDate
    registrationDate: Date;
    orderHistory: Array<Order>;

    constructor(
        _name: string,
        registrationDate: Date,
        orderHistory: Array<Order>
    ) {
        this._name = _name;
        this.registrationDate = registrationDate;
        this.orderHistory = orderHistory
    }
    get userName() {
        return this._name
    }

    set newOrderHistory(newOrder: Order) {
        if (newOrder) {
            this.orderHistory.push(newOrder)
        }
    }

    print(): void {
        console.log(this);
    }
}