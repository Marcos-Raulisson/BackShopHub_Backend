const AddPhotoToAssessmentsService = require('../../services/productsAssessments/AddPhotoToAssessmentsService');

exports.addPhoto = async (req, res) => {
  const { file } = req;

  if (!file) return res.status(400).json({ data: { message: "It looks like you didn't upload an image to add it to the assessment." } });

  try {
    const addPhotoToAssessmentsService = new AddPhotoToAssessmentsService(file);
    await addPhotoToAssessmentsService.addPhoto();
  } catch (error) {
    return res.status(500).json({ data: { message: 'Internal Server Error' } });
  }

  res.status(200).json({ data: { message: 'The image has been added to the assessment.' } });
};
