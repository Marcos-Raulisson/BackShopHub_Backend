const DeleteProductModel = require('../../models/products/DeleteProductModel');

exports.delete = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ data: { message: 'The product could not be deleted.' } });
  }

  try {
    const deleteProduct = new DeleteProductModel(id);
    await deleteProduct.delete();
  } catch (error) {
    return res.status(404).json({ data: { message: 'The product could not be deleted.' } });
  }

  res.status(200).json({ data: { message: 'Product deleted.' } });
};
