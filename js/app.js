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
            showNotification('<div class="row pt-4 pb-3"><div class="col-12"><div class="alert alert-success d-flex" role="alert"><div class="pe-1"><i class="far fa-check-circle"></i></div><div class="pe-2"></div><div><span>Sản phẩm đã được thêm vào giỏ hàng</span></div></div></div></div>');
            //calculator product
            calcPriceInCard();
            //get value input-product khi change
            var inputProducts = document.querySelectorAll('.input_product');
            inputProducts.forEach(function (inputProduct) {
                inputProduct.addEventListener('change', function () {
                    //get id of inputProduct
                    var idInputProduct = this.dataset.index;
                    var currProduct = allProduct.getProductById(idInputProduct);
                    cardProduct.updateProductCard(currProduct, parseInt(this.value));
                    //calculator product
                    calcPriceInCard();
                    showNotification('<div class="row pt-4 pb-3"><div class="col-12"><div class="alert alert-info d-flex" role="alert"><div class="pe-1"><i class="far fa-check-circle"></i></div><div class="pe-2"></div><div><span>Đã cập nhập số lượng sản phẩm</span></div></div></div></div>');
                });
            });
        }
        else {
            console.log('Không tìm thấy sản phâm');
        }
    });
});
function calcPriceInCard() {
    amountProduct.innerHTML = "(" + cardProduct.calcAmount() + " s\u1EA3n ph\u1EA9m)";
    currPrice.innerHTML = cardProduct.calcPrice() + " \u0111";
    currPriceVat.innerHTML = cardProduct.calcPrice() + " \u0111";
}
function showNotification(content) {
    var showNotificationWhenClick = document.querySelector('.notification__card');
    showNotificationWhenClick.innerHTML = content;
}
