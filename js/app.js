import { productInCard } from './card_product.js';
import { manaProducts } from './mana_product.js';
import { manaCardProduct } from './mana_card_product.js';
var allProduct = new manaProducts();
var cardProduct = new manaCardProduct();
var listProducts = document.querySelector('.list__products');
listProducts.innerHTML = allProduct.showProduct();
var btnProduct = document.querySelectorAll('.btn-click');
var listCardProduct = document.querySelector('.list__card-product');
var amountProduct = document.querySelector('.amount_product .amount-product-content');
var currPrice = document.querySelector('.curr_price');
var currPriceVat = document.querySelector('.curr_price-vat');
btnProduct.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var getIdProduct = this.dataset.index;
        if (allProduct.getProductById(getIdProduct) !== 0) {
            var currProduct = allProduct.getProductById(getIdProduct);
            if (cardProduct.checkProduct(currProduct) === -1) {
                var transformCardProduct = new productInCard(currProduct, 1);
                cardProduct.addProductCard(transformCardProduct);
            }
            else {
                cardProduct.amountCount(currProduct);
            }
            listCardProduct.innerHTML = cardProduct.showProductInCard();
            listCardProduct.classList.add('card');
            amountProduct.innerHTML = "(" + cardProduct.calcAmount() + " s\u1EA3n ph\u1EA9m)";
            currPrice.innerHTML = cardProduct.calcPrice() + " \u0111";
            currPriceVat.innerHTML = cardProduct.calcPrice() + " \u0111";
        }
        else {
            console.log('Không tìm thấy sản phâm');
        }
    });
});
