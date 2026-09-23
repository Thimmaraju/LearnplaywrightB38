export class buzzpage{

    constructor(page){

        this.page = page
        this.textAreabuzzPost = page.locator(`//textarea[@placeholder="What's on your mind?"]`)
        this.postButton = page.locator('//button[@type="submit"]')
    }

    async postAMessage(data){

        await this.textAreabuzzPost.fill(data)
        await this.postButton.click()


    }
}