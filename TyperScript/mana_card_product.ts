import { Products } from './product.js'
import { productInCard } from './card_product.js'


export class manaCardProduct {
    private cardProducts : productInCard[] = []

    public addProductCard(newProduct : productInCard) : void {
      this.cardProducts.push(newProduct)
    }

    public viewCard() {
      return this.cardProducts
    }

    public amountCount(newProduct : Products) :void {
      var indexProduct = this.checkProduct(newProduct)
      var amountCurr = this.cardProducts[indexProduct].getAmount()
      amountCurr = amountCurr + 1
      this.cardProducts[indexProduct].changeAmountProduct(amountCurr)
    }

    public checkProduct(newProduct : Products) : number {
      for(let i : number = 0; i < this.cardProducts.length; i++) {
        if(this.cardProducts[i].getCardProduct().id === newProduct.id) {
          return i
        }
      }

      return -1
    }
    public updateProductCard(product : Products, amount : number) : void {
      for(let i : number = 0; i < this.cardProducts.length; i++) {
          let idProduct = this.cardProducts[i].getCardProduct().id
          if(idProduct === product.id) {
            this.cardProducts[i].changeAmountProduct(amount);
          }

        }
    }

    public calcAmount():number {
       let count : number = 0;
       for(let i : number = 0; i < this.cardProducts.length; i++) {
          count += this.cardProducts[i].getAmount()
       }
    
       return count
    }

    public calcPrice():number {
      let currPrice : number = 0
      for(let i = 0; i < this.cardProducts.length; i++) {
        let price : number = this.cardProducts[i].getCardProduct().price
        let amount : number = this.cardProducts[i].getAmount()
        
        currPrice += price * amount
      }
      
      return currPrice
    }

    public showProductInCard():string {
      var cardHTML : string = ''
      for(let i : number = 0; i < this.cardProducts.length; i++) {
        // cardHTML += this.cardProducts[i].getCardProduct().name

        cardHTML += `
         
              <div>
                  <div class="row px-2 py-3">
                      <div class="col-2">
                          <img src="${this.cardProducts[i].getCardProduct().image}" alt="" class="img-fluid img-thumbnail">
                      </div>

                      <div class="col-4">
                        <h4>${this.cardProducts[i].getCardProduct().name}</h4>
                        <div>${this.cardProducts[i].getCardProduct().desc}</div>
                      </div>

                      <div class="col-2">
                          <div style="font-size: 20px">${this.cardProducts[i].getCardProduct().price}</div>
                          <div class="badge badge-primary" style="background-color: #ffc107">-20%</div>
                      </div>

                      <div class="col-1">
                          <input type="number" name="" id="" class="input_product" value="${this.cardProducts[i].getAmount()}" min="1" max="99" class="form-group text-center" style="width: 100%;" data-index = "${this.cardProducts[i].getCardProduct().id}">
                      </div>

                      <div class="col-2">
                          <button class="btn btn-outline-danger ms-3">Delete</button>
                      </div>

                </div>
             </div>
        `
      }
      return cardHTML
    }

    constructor() {}
}