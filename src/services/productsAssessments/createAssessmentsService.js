function CreateAssessments(productId, userId, text, stars) {
  this.productId = productId;
  this.userId = userId;
  this.text = text;
  this.stars = stars;
}

CreateAssessments.prototype.create = function () {
  console.log(this.productId, this.userId, this.text, this.stars);
};

module.exports = CreateAssessments;
