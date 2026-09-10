const fs = require('node:fs');
const path = require('node:path');

function loadJson(relativePath) {
  const filePath = path.resolve(__dirname, '..', relativePath);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found: ${relativePath}`);
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Required environment variable is missing: ${name}`);
  }

  return value;
}

function getAdminCredentials() {
  return {
    username: getRequiredEnv('APP_USERNAME'),
    password: getRequiredEnv('APP_PASSWORD'),
  };
}

module.exports = {
  getAdminCredentials,
  getRequiredEnv,
  loadJson,
};