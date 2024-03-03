const CreateProduct = require('../../services/products/CreateProductService');

exports.create = (req, res) => {
  const {
    name, description, price, category, brand, stock,
  } = req.body;

  if (!name || !req.file || !description || !price || !category || !brand || !stock) {
    return res.status(400).json({ data: { message: 'All field are mandatory.' } });
  }

  try {
    const createProduct = new CreateProduct(name, req.file, description, price, category, brand, stock);
    res.status(200).json({ message: 'Created product.' });
  } catch (error) {
    res.status(401).json({ data: { message: error.message } });
  }
};
