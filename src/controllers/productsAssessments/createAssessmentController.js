const CreateAssessments = require('../../services/productsAssessments/createAssessmentsService');

exports.assessment = async (req, res) => {
  const {
    productId, userId, text, stars,
  } = req.body;

  if (!productId || !userId || !text || !stars) {
    return res.status(400).json({ data: { message: 'Unable to create an assessment.' } });
  }

  try {
    const createAssessment = new CreateAssessments(productId, userId, text, stars);
    await createAssessment.create();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ data: { message: 'Internal Server Error.' } });
  }

  res.status(200).json({ data: { message: 'Okay.' } });
};
