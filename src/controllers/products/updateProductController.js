exports.update = (req, res) => {
  const {
    name, description, price, category, brand, stock,
  } = req.body;

  console.log(name, description, price, category, brand, stock);
  console.log(req.file);

  res.status(200).json({ data: { message: 'Updated product' } });
};
