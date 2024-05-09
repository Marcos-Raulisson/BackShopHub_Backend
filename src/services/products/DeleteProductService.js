require('dotenv').config();

const B2 = require('backblaze-b2');

const SearchProduct = require('../../models/products/SearchProductModel');
const DeleteProducts = require('../../models/products/DeleteProductModel');

function DeleteProduct(id) {
  this.id = id;

  this.b2 = new B2({
    applicationKeyId: process.env.KEY_ID,
    applicationKey: process.env.APP_KEY,
  });
}

DeleteProduct.prototype.delete = async function () {
  const product = await this.findProduct();
  const doesFileExist = await this.doesFileExist(product.image_filename);

  if (!product && !doesFileExist) throw new Error('Product does not exist');

  const deleteImage = await this.deleteImage(product.image_filename, product.image_id);
  const deleteProductFromDatabase = new DeleteProducts(product.id);
  await deleteProductFromDatabase.delete();
};

DeleteProduct.prototype.findProduct = async function () {
  try {
    const searchProduct = new SearchProduct(this.id);
    const product = await searchProduct.find();
    return product;
  } catch (error) {
    throw new Error();
  }
};

DeleteProduct.prototype.doesFileExist = async function (fileName) {
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

DeleteProduct.prototype.deleteImage = async function (fileName, fileId) {
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

module.exports = DeleteProduct;
