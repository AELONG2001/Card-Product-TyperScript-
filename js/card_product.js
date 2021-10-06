var productInCard = /** @class */ (function () {
    function productInCard(productCart, amount) {
        if (amount === void 0) { amount = 1; }
        this.productCart = productCart;
        this.amount = amount;
    }
    productInCard.prototype.calcPrice = function () {
        return 1;
    };
    productInCard.prototype.showProductCart = function () {
        return '';
    };
    productInCard.prototype.getCardProduct = function () {
        return this.productCart;
    };
    productInCard.prototype.changeAmountProduct = function (amount) {
        this.amount = amount;
    };
    productInCard.prototype.getAmount = function () {
        return this.amount;
    };
    return productInCard;
}());
export { productInCard };
