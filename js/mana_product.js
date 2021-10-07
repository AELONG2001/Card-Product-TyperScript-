import { Products } from './product.js';
var manaProducts = /** @class */ (function () {
    function manaProducts() {
        this.product = [];
        var product1 = new Products(1, './assets/img/img1.png', 'Điện thoại Y20', 120000, 'Điện thoại Vivo Y20', true);
        this.addProduct(product1);
        var product2 = new Products(2, './assets/img/img2.png', 'Đồng hồ T500', 240000, 'Đồng Hồ T500 mẫu mới nhất 2021', true);
        this.addProduct(product2);
        var product3 = new Products(3, './assets/img/img3.jpg', 'Ốp lưng điện thoại', 60000, 'Ốp lưng điện thoại kiểu dáng đẹp', false);
        this.addProduct(product3);
        var product4 = new Products(4, './assets/img/img4.jpg', 'Ví da nam', 80000, 'Ví da dành cho nam màu đen', true);
        this.addProduct(product4);
        var product5 = new Products(5, './assets/img/img5.jpg', 'Giày Nam nữ', 160000, 'Giày thể thao cho Nam và Nữ', true);
        this.addProduct(product5);
    }
    manaProducts.prototype.getProducts = function () {
        return this.product;
    };
    manaProducts.prototype.getProductById = function (id_sp) {
        for (var i = 0; i < this.product.length; i++) {
            if (this.product[i].id == id_sp) {
                return this.product[i];
            }
        }
        return 'Không tìm thấy sản phẩm';
    };
    manaProducts.prototype.addProduct = function (value) {
        this.product.push(value);
    };
    manaProducts.prototype.showProduct = function () {
        var listProductsHTML = '';
        if (this.product.length !== 0) {
            for (var i = 0; i < this.product.length; i++) {
                listProductsHTML += "\n                    <div class=\"col-2\" style=\"width: 20%\">\n                        <div class=\"card card-block card__product id-" + this.product[i].id + "\">\n                        <div style=\"padding: 16px\">\n                                <img src=\"" + this.product[i].image + "\" alt=\"\" class=\"card-img-top\">\n                                <div class=\"card-body\" style=\"padding: 0\">\n                                    <div class=\"card-title mt-2\" style=\"color:#1010d8\">" + this.product[i].name + "</div>\n                                <div class=\"card-text\">" + this.product[i].desc + "</div>\n                                </div>\n                                <div class=\"mt-2\" style=\"font-size: 20px;\">" + this.product[i].price + "</div>";
                if (this.product[i].state === false) {
                    listProductsHTML += "\n                                        <button class=\"btn btn-outline-secondary btn-block disabled mt-3 btn-click\" style=\"width: 100%;\">H\u1EBFt H\u00E0ng</button>\n                                       \n                                    ";
                }
                else {
                    listProductsHTML += "\n                                       <button class=\"btn btn-outline-info btn-block mt-3 btn-click\" style=\"width: 100%;\" data-index = \"" + this.product[i].id + "\">Mua h\u00E0ng</button>\n                                      \n                                   ";
                }
                listProductsHTML += "\n                        </div>\n                        </div>\n                    </div>";
            }
            return listProductsHTML;
        }
    };
    return manaProducts;
}());
export { manaProducts };
