require('dotenv').config();

const B2 = require('backblaze-b2');

const CheckProduct = require('../../models/products/SearchProductModel');

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

  this.b2 = new B2({
    applicationKeyId: process.env.KEY_ID,
    applicationKey: process.env.APP_KEY,
  });
}

UpdateProduct.prototype.updateProduct = async function () {
  const product = await this.searchProduct();

  if (!product) throw new Error('Product not found.');

  const fileExists = await this.doesFileExist(product.image_filename);

  if (!fileExists) throw new Error('Error when updating product.');

  await this.deleteImage(product.image_filename, product.image_id);
};

UpdateProduct.prototype.deleteImage = async function (fileName, fileId) {
  try {
    await this.b2.authorize();

    await this.b2.deleteFileVersion({
      fileName,
      fileId,
    });
  } catch (error) {
    console.error(`Error deleting file ${fileName} with fileId ${fileId}: ${error.message}`);
  }
};

UpdateProduct.prototype.searchProduct = async function () {
  const checkProduct = new CheckProduct(this.product[0]);
  const product = await checkProduct.find();
  return product;
};

UpdateProduct.prototype.doesFileExist = async function (fileName) {
  try {
    await this.b2.authorize();

    const file = await this.b2.listFileNames({
      bucketId: process.env.BUCKET_ID,
      startFileName: fileName,
      maxFileCount: 1,
    });

    if (file.data.files.length === 0) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

UpdateProduct.prototype.updateImage = function () {
};

module.exports = UpdateProduct;
