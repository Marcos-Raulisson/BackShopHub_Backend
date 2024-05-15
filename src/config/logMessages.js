const pino = require('pino');
const configFile = require('./config.json');

const logger = pino();

function WarningLogMessage(functionName, messageDescription, filter = {}) {
  if (!configFile.api_log_message.enable_warning_logs) return;

  let filteredMessage = '';
  if (Object.keys(filter).length > 0) {
    filteredMessage = ` - ${JSON.stringify(filter)}`;
  }

  return logger.warn(`${functionName}: ${messageDescription}${filteredMessage}`);
}

function ErrorLogMessage(functionName, messageDescription, filter = {}) {
  if (!configFile.api_log_message.enable_error_logs) return;

  let filteredMessage = '';
  if (Object.keys(filter).length > 0) {
    filteredMessage = ` - ${JSON.stringify(filter)}`;
  }

  return logger.error(`${functionName}: ${messageDescription}${filteredMessage}`);
}

function InfoLogMessage(functionName, messageDescription, filter = {}) {
  if (!configFile.api_log_message.enable_info_logs) return;

  let filteredMessage = '';
  if (Object.keys(filter).length > 0) {
    filteredMessage = ` - ${JSON.stringify(filter)}`;
  }

  return logger.info(`${functionName}: ${messageDescription}${filteredMessage}`);
}

function DebugLogMessage(functionName, messageDescription, filter = {}) {
  if (!configFile.api_log_message.enable_debug_logs) return;

  let filteredMessage = '';
  if (Object.keys(filter).length > 0) {
    filteredMessage = ` - ${JSON.stringify(filter)}`;
  }

  return logger.debug(`${functionName}: ${messageDescription}${filteredMessage}`);
}

function SuccessLogMessage(functionName, messageDescription, filter = {}) {
  if (!configFile.api_log_message.enable_success_logs) return;

  let filteredMessage = '';
  if (Object.keys(filter).length > 0) {
    filteredMessage = ` - ${JSON.stringify(filter)}`;
  }

  return logger.info(`${functionName}: ${messageDescription}${filteredMessage}`);
}

function FatalLogMessage(functionName, messageDescription, filter = {}) {
  if (!configFile.api_log_message.enable_fatal_logs) return;

  let filteredMessage = '';
  if (Object.keys(filter).length > 0) {
    filteredMessage = ` - ${JSON.stringify(filter)}`;
  }

  return logger.fatal(`${functionName}: ${messageDescription}${filteredMessage}`);
}

function CriticalLogMessage(functionName, messageDescription, filter = {}) {
  if (!configFile.api_log_message.enable_critical_logs) return;

  let filteredMessage = '';
  if (Object.keys(filter).length > 0) {
    filteredMessage = ` - ${JSON.stringify(filter)}`;
  }

  return logger.critical(`${functionName}: ${messageDescription}${filteredMessage}`);
}

function ApiLogMessage(functionName, messageDescription, filter = {}) {
  if (!configFile.api_log_message.enable_api_logs) return;

  let filteredMessage = '';
  if (Object.keys(filter).length > 0) {
    filteredMessage = ` - ${JSON.stringify(filter)}`;
  }
  return logger.info(`${functionName}: ${messageDescription}${filteredMessage}`);
}

ApiLogMessage('[App_jobs]', 'Jobs loaded!');
ErrorLogMessage('[Service_test_error]', 'CRITICAL ERROR', { err: 'Something went wrong' });

module.exports = {
  ErrorLogMessage,
  WarningLogMessage,
  InfoLogMessage,
  DebugLogMessage,
  SuccessLogMessage,
  FatalLogMessage,
  CriticalLogMessage,
  ApiLogMessage,
};
