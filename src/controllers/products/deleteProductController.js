const DeleteProduct = require('../../services/products/DeleteProductService');

exports.delete = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ data: { message: 'The product could not be deleted.' } });
  }

  try {
    const deleteProduct = new DeleteProduct(id);
    await deleteProduct.delete();
  } catch (error) {
    if (error.message) {
      return res.status(404).json({ data: { message: error.message } });
    } else {
      return res.status(404).json({ data: { message: 'The product could not be deleted.' } });
    }
  }

  res.status(200).json({ data: { message: 'Product deleted.' } });
};
