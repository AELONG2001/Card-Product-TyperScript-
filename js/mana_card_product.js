var manaCardProduct = /** @class */ (function () {
    function manaCardProduct() {
        this.cardProducts = [];
    }
    manaCardProduct.prototype.addProductCard = function (newProduct) {
        this.cardProducts.push(newProduct);
    };
    manaCardProduct.prototype.viewCard = function () {
        return this.cardProducts;
    };
    manaCardProduct.prototype.amountCount = function (newProduct) {
        var indexProduct = this.checkProduct(newProduct);
        var amountCurr = this.cardProducts[indexProduct].getAmount();
        amountCurr = amountCurr + 1;
        this.cardProducts[indexProduct].changeAmountProduct(amountCurr);
    };
    manaCardProduct.prototype.checkProduct = function (newProduct) {
        for (var i = 0; i < this.cardProducts.length; i++) {
            if (this.cardProducts[i].getCardProduct().id === newProduct.id) {
                return i;
            }
        }
        return -1;
    };
    manaCardProduct.prototype.updateProductCard = function (product, amount) { };
    manaCardProduct.prototype.calcAmount = function () {
        var count = 0;
        for (var i = 0; i < this.cardProducts.length; i++) {
            count += this.cardProducts[i].getAmount();
        }
        return count;
    };
    manaCardProduct.prototype.calcPrice = function () {
        var currPrice = 0;
        for (var i = 0; i < this.cardProducts.length; i++) {
            var price = this.cardProducts[i].getCardProduct().price;
            var amount = this.cardProducts[i].getAmount();
            currPrice += price * amount;
        }
        return currPrice;
    };
    manaCardProduct.prototype.showProductInCard = function () {
        var cardHTML = '';
        for (var i = 0; i < this.cardProducts.length; i++) {
            // cardHTML += this.cardProducts[i].getCardProduct().name
            cardHTML += "\n         \n              <div>\n                  <div class=\"row px-2 py-3\">\n                      <div class=\"col-2\">\n                          <img src=\"" + this.cardProducts[i].getCardProduct().image + "\" alt=\"\" class=\"img-fluid img-thumbnail\">\n                      </div>\n\n                      <div class=\"col-4\">\n                        <h4>" + this.cardProducts[i].getCardProduct().name + "</h4>\n                        <div>" + this.cardProducts[i].getCardProduct().desc + "</div>\n                      </div>\n\n                      <div class=\"col-2\">\n                          <div style=\"font-size: 20px\">" + this.cardProducts[i].getCardProduct().price + "</div>\n                          <div class=\"badge badge-primary\" style=\"background-color: #ffc107\">-20%</div>\n                      </div>\n\n                      <div class=\"col-1\">\n                          <input type=\"number\" name=\"\" id=\"\" value=\"" + this.cardProducts[i].getAmount() + "\" min=\"1\" max=\"99\" class=\"form-group text-center\" style=\"width: 100%;\">\n                      </div>\n\n                      <div class=\"col-3\">\n                          <button class=\"btn btn-success\">Update</button>\n                          <button class=\"btn btn-outline-danger\">Delete</button>\n                      </div>\n\n                </div>\n             </div>\n        ";
        }
        return cardHTML;
    };
    return manaCardProduct;
}());
export { manaCardProduct };
