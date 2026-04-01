import { expect, Locator, Page } from "@playwright/test";

export class Finish_page{

      page:Page
        finish_button :Locator
      finishpagetitle:Locator
     
       constructor (page : any){
        this.page=page
         this.finish_button=page.locator('[data-test="title"]')
         this.finishpagetitle=page.locator('[id="finish"]')

       }

       public async verifyFinishURL(){
         await expect (this.page.url()).toBe("https://www.saucedemo.com/checkout-step-two.html")
       }

       public async verifyfinishpagetitle(){
       await expect(this.finishpagetitle).toBeVisible()
      console.log(await this.finish_button.textContent())


    }



    public async Clickfinishbutton(){
      /* await this.finish_button.scrollIntoViewIfNeeded()
      // await this.page.pause()*/
       await this.finish_button.click()
    }


}