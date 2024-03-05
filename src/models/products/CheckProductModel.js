const Database = require('../../config/Database');

function SearchProduct(id) {
  Database.call(this);

  this.id = id;

  this.find();
}

SearchProduct.prototype = Object.create(Database.prototype);

SearchProduct.prototype.find = async function () {
  const connection = await this.openConnection();
  try {
    const sql = 'SELECT * FROM products WHERE id = ?';
    const [rows] = await connection.execute(sql, [this.id]);
    if (!rows.length > 0) {
      console.log('Produto não existe');
    } else {
      console.log('Produto existe');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = SearchProduct;
