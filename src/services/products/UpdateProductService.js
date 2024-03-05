const B2 = require('backblaze-b2');

const SearchProduct = require('../../models/products/SearchProductModel');

function UpdateProduct(id, name, image, description, price, category, brand, stock) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.description = description;
  this.price = price;
  this.category = category;
  this.brand = brand;
  this.stock = stock;

  this.updateImage();
}

UpdateProduct.prototype.updateImage = function () {
  const searchProduct = new SearchProduct(this.id);
  searchProduct.find();
};

module.exports = UpdateProduct;
