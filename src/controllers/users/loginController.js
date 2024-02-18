exports.login = (req, res) => {
  const { email, password } = req.body;
  console.log(`Email: ${email}
Senha: ${password}
Status: logged`);
  res.status(200).json({ message: 'Logged' });
};
