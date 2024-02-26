const RegisterProduct = require('../../models/products/CreateProductModel');

function CreateProduct(name, description, price, category, brand, stock) {
  this.product = [
    this.name = name,
    this.description = description,
    this.price = Number(price).toFixed(2),
    this.category = category,
    this.brand = brand,
    this.stock = parseInt(stock, 10),
  ];

  this.create();
}

CreateProduct.prototype.create = function () {
  const createProduct = new RegisterProduct(this.product);
};

module.exports = CreateProduct;
