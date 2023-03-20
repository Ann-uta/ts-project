import { ShopingCart } from "./ShopingCart.js";

function logCart(target: Object, method: string, descriptor: PropertyDescriptor) {
    descriptor.value = function () {
        console.log(this)
    }
}

export class Order {
    name: string;
    price: number;
    constructor(
        name: string,
        price: number) {
        this.name = name;
        this.price = price
    }
    @logCart
    addToShopingCart() {
        new ShopingCart([this])
    }
}
