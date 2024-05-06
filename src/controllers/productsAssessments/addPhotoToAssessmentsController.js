const addPhotoToAssessmentsService = require('../../services/productsAssessments/AddPhotoToAssessmentsService');

exports.addPhoto = (req, res) => {
  console.log(req.file);
  res.status(200).json({ data: { message: 'Okay!' } });
};
