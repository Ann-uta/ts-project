import { Order } from "./Order.js"

export class ShopingCart {
    shoppingList: Array<Order>
    constructor(
        shoppingList: Array<Order>) {
        this.shoppingList = shoppingList
    }
}
