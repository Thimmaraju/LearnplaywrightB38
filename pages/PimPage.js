class PimPage {
  constructor(page) {
    this.page = page;
    this.pimLink = page.getByRole('link', { name: 'PIM' });
    this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });
  }

  async openAddEmployeePage() {
    await this.pimLink.click();
    await this.addEmployeeLink.click();
  }
}

module.exports = { PimPage };
