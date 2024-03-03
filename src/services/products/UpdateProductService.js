const B2 = require('backblaze-b2');

function UpdateProduct(name, image, description, price, category, brand, stock) {
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
  console.log(this.image);
};

module.exports = UpdateProduct;
