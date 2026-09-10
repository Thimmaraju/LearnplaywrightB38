const { faker } = require('@faker-js/faker');

function uniqueSuffix(length = 6) {
  return faker.string.alphanumeric({ length, casing: 'lower' });
}

function randomEmployeeId(length = 6) {
  return faker.string.alphanumeric({ length, casing: 'upper' });
}

function randomUsername(prefix = 'user', length = 6) {
  return `${prefix}${uniqueSuffix(length)}`;
}

function randomDate(start, end) {
  return faker.date.between({
    from: new Date(start),
    to: new Date(end),
  });
}

function employeeData(password) {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    employeeId: randomEmployeeId(),
    username: randomUsername(),
    password,
  };
}

function jobTitle(prefix = 'Automation Job') {
  return `${prefix} ${uniqueSuffix(5)}`;
}

module.exports = {
  employeeData,
  jobTitle,
  randomDate,
  randomEmployeeId,
  randomUsername,
  uniqueSuffix,
};