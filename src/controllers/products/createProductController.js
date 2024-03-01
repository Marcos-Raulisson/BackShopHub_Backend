const CreateProduct = require('../../services/products/createProductService');

exports.create = async (req, res) => {
  const {
    name, description, price, category, brand, stock,
  } = req.body;

  if (!name || !description || !price || !category || !brand || !stock || !req.file) {
    return res.status(400).json({ data: { message: 'All field are mandatory.' } });
  }

  try {
    const createProduct = new CreateProduct(name, description, price, category, brand, stock, req.file);
    res.status(200).json({ message: 'Created product.' });
  } catch (error) {
    res.status(401).json({ data: { message: error.message } });
  }
};
