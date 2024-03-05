const Database = require('../../config/Database');

function SearchProduct(id) {
  Database.call(this);

  this.id = id;
}

SearchProduct.prototype = Object.create(Database.prototype);

SearchProduct.prototype.find = function () {
  console.log(this.id);
};

module.exports = SearchProduct;
