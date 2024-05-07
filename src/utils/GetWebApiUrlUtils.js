const configFile = require('../config/config.json');

function GetWebApiUrl() {
  return configFile.api.web_api_url;
}

module.exports = {
  GetWebApiUrl
};
