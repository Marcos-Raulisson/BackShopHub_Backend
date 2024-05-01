const CreateAssessments = require('../../services/productsAssessments/createAssessmentsService');

exports.assessment = (req, res) => {
  const {
    productId, userId, text, stars,
  } = req.body;

  if (!productId || !userId || !text || !stars) {
    return res.status(400).json({ data: { message: 'Unable to create an assessment.' } });
  }

  try {
    const createAssessment = new CreateAssessments(productId, userId, text, stars);
    createAssessment.create();
  } catch (error) {
    console.error(error);
  }

  res.status(200).json({ data: { message: 'Okay.' } });
};
