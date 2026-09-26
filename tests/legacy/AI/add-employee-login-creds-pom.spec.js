const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

const { LoginPage } = require('../../pages/LoginPage');
const { PimPage } = require('../../pages/PimPage');
const { AddEmployeePage } = require('../../pages/AddEmployeePage');
const staticData = require('../../testdata/addemployee-login-data.json');

const { adminUser, employee, loginDetails } = staticData;

test('Add employee with login credentials using POM', async ({ page }) => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const employeeId = faker.string.alphanumeric({ length: 6, casing: 'mixed' }).toUpperCase();
  const username = `user${faker.string.alphanumeric({ length: 6, casing: 'lower' })}`;
  const password = loginDetails.password;

  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  const addEmployeePage = new AddEmployeePage(page);

  await loginPage.goto();
  await loginPage.login(adminUser.username, adminUser.password);

  await expect(page).toHaveURL(/\/dashboard\/index$/);

  await pimPage.openAddEmployeePage();
  await expect(page).toHaveURL(/\/pim\/addEmployee$/);

  await addEmployeePage.fillBasicInfo({
    firstName,
    lastName,
    employeeId,
  });

  await addEmployeePage.enableLoginDetails();
  await addEmployeePage.fillLoginDetails({ username, password });
  await addEmployeePage.save();

  await addEmployeePage.expectEmployeeCreated({ firstName, lastName });
  await expect(page).toHaveURL(/\/pim\/viewPersonalDetails\/empNumber\//);
});
