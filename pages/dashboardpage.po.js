export class dashboardPage{

    constructor(page){

        this.page =page
        this.PIMmenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
        this.buzzMenu = page.locator('//a[@href="/web/index.php/buzz/viewBuzz"]')
    }

    async navigatetoPIM(){

        await this.PIMmenu.click()
    }

    async navigateToBuzz(){

        await this.buzzMenu.click()
    }
}