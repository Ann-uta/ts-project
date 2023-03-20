import { ShopingCart } from "./src/ShopingCart.js";
import { Order } from "./src/Order.js";
import { User } from "./src/User.js";


let newO = new Order('banana', 2)
let newO2 = new Order('apple', 4)
newO.addToShopingCart()
const cart = new ShopingCart([newO])
console.log(cart)


let tom = new User("Tom", new Date(2023, 2, 25), []);
tom.print()
console.log(tom.userName)
console.log(tom.newOrderHistory = newO)
console.log(tom.newOrderHistory = newO2)
tom.registrationDate = new Date(2022, 0, 2) 