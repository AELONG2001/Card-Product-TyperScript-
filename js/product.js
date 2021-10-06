var Products = /** @class */ (function () {
    function Products(id, image, name, price, desc, state) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.state = state;
    }
    Object.defineProperty(Products.prototype, "id", {
        //id get and set
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Products.prototype, "image", {
        //image get and set
        get: function () {
            return this._image;
        },
        set: function (v) {
            this._image = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Products.prototype, "name", {
        //name get and set
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Products.prototype, "price", {
        //price get and set
        get: function () {
            return this._price;
        },
        set: function (v) {
            this._price = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Products.prototype, "desc", {
        //desc get and set
        get: function () {
            return this._desc;
        },
        set: function (v) {
            this._desc = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Products.prototype, "state", {
        //state get and set
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
        },
        enumerable: true,
        configurable: true
    });
    return Products;
}());
export { Products };
