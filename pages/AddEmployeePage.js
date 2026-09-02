class AddEmployeePage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.employeeIdInput = page.locator('input[name="employeeId"], input[placeholder="Employee Id"], input[aria-label="Employee Id"]');
    this.createLoginToggle = page.locator('input[type="checkbox"]').first();
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="confirmPassword"]');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.personalDetailsHeading = page.getByRole('heading', { name: 'Personal Details' });
  }

  async fillBasicInfo({ firstName, lastName, employeeId }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.employeeIdInput.fill('');
    await this.employeeIdInput.fill(employeeId);
  }

  async enableLoginDetails() {
    await this.createLoginToggle.check({ force: true });
  }

  async fillLoginDetails({ username, password }) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
  }

  async save() {
    await this.saveButton.click();
  }

  async expectEmployeeCreated({ firstName, lastName }) {
    await this.page.waitForURL(/\/pim\/viewPersonalDetails\/empNumber\//);
    await this.page.getByRole('heading', { name: `${firstName} ${lastName}` }).waitFor();
    await this.personalDetailsHeading.waitFor();
  }
}

module.exports = { AddEmployeePage };
