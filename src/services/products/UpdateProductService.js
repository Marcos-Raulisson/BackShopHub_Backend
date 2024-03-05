const B2 = require('backblaze-b2');

const SearchProduct = require('../../models/products/SearchProductModel');

function UpdateProduct(id, name, image, description, price, category, brand, stock) {
  this.product = [
    this.id = id,
    this.name = name,
    this.image = image,
    this.description = description,
    this.price = price,
    this.category = category,
    this.brand = brand,
    this.stock = stock,
  ];

  this.updateProduct();
}

UpdateProduct.prototype.updateProduct = function () {
  const searchProduct = new SearchProduct(this.product[0]);
};

UpdateProduct.prototype.updateImage = function () {
};

UpdateProduct.prototype.deleteImage = function () {
};


module.exports = UpdateProduct;
