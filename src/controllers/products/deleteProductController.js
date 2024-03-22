exports.delete = (req, res) => {
  const { id } = req.params;

  console.log(`id: ${id}`);

  res.status(200).json({ data: { message: 'Produto deletado' } });
};
