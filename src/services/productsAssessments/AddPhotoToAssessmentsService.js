require('dotenv').config();
const B2 = require('backblaze-b2');

const AddPhotoToAssessmentsModel = require('../../models/productsAssessments/AddPhotoToAssessmentsModel');

function AddPhotoToAssessments(avaliationId, file) {
  this.avaliationId = avaliationId;
  this.image = file;
}

AddPhotoToAssessments.prototype.addPhoto = async function () {
  const upload = await this.uploadImage();
  const addPhotoToAssessmentsModel = new AddPhotoToAssessmentsModel(this.avaliationId, upload.url, upload.id, upload.fileName);

  await addPhotoToAssessmentsModel.add();
};

AddPhotoToAssessments.prototype.uploadImage = async function () {
  const b2 = new B2({
    applicationKeyId: process.env.KEY_ID,
    applicationKey: process.env.APP_KEY,
  });

  const authResponse = await b2.authorize();
  const { downloadUrl } = authResponse.data;

  const response = await b2.getUploadUrl({ bucketId: process.env.BUCKET_ID });
  const { authorizationToken, uploadUrl } = response.data;

  const params = {
    uploadUrl,
    uploadAuthToken: authorizationToken,
    fileName: `PhotoAssessment/${this.image.originalname}`,
    data: this.image.buffer,
  };

  const fileInfo = await b2.uploadFile(params);

  const url = `${downloadUrl}/file/${process.env.BUCKET_NAME}/${params.fileName}`;

  return { url, id: fileInfo.data.fileId, fileName: fileInfo.data.fileName };
};

module.exports = AddPhotoToAssessments;
