const CreateAssessmentModel = require('../../models/productsAssessments/createAssessmentsModel');

function CreateAssessments(productId, userId, text, stars) {
  this.productId = productId;
  this.userId = userId;
  this.text = text;
  this.stars = stars;
}

CreateAssessments.prototype.create = async function () {
  const createAssessmentsModel = new CreateAssessmentModel(this.productId, this.userId, this.text, this.stars);
  await createAssessmentsModel.create();
};

module.exports = CreateAssessments;
