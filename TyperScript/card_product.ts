import { Products } from "./product.js";

export class productInCard {
    private productCart : Products;
    private amount : number;

    constructor(productCart: Products, amount: number = 1) {
        this.productCart = productCart;
        this.amount = amount;
    }
    
    public calcPrice() : number {
        return 1
    }
    
    public showProductCart() : string {
        return ''
    }

    public getCardProduct() : Products {
        return this.productCart
    }

    public changeAmountProduct(amount : number) {
        this.amount = amount
    }

    public getAmount() : number {
        return this.amount
    }

}
