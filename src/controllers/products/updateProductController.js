const UpdateProduct = require('../../services/products/UpdateProductService');

exports.update = (req, res) => {
  const {
    id, name, description, price, category, brand, stock,
  } = req.body;

  if (!name || !req.file || !description || !price || !category || !brand || !stock) {
    return res.status(400).json({ data: { message: 'All fields mandatory.' } });
  }

  try {
    const updateProduct = new UpdateProduct(id, name, req.file, description, price, category, brand, stock);
  } catch (error) {
    return res.status(400).json({ data: { message: error.message } });
  }

  res.status(200).json({ data: { message: 'Updated product' } });
};
