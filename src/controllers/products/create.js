exports.create = (req, res) => {
  const {
    name, description, price, category, brand, stock,
  } = req.body;

  console.log(name, description, price, category, brand, stock);

  res.status(200).json({ message: 'Created product.' });
};
