import { expect, Locator, Page } from "@playwright/test";

export class Checkout_page{
     page:Page
     CheckoutYourInformation:Locator
     firstname:Locator
     lastname:Locator
     zipcode:Locator
     continue:Locator
     erroricon_X:Locator



     constructor (page : any){
        this.page=page
        this.CheckoutYourInformation=page.locator('[data-test="title"]')
        this.firstname=page.locator('[data-test="firstName"]')
        this.lastname=page.locator('[data-test="lastName"]')
        this.zipcode=page.locator('[data-test="postalCode"]')
        this.continue=page.locator('[id="continue"]')
        this.erroricon_X=page.locator('[role="img"]')
     }

      public async verifyyourcheckouttitle(){
        await expect(this.CheckoutYourInformation).toBeVisible()
       }

    public async verifycheckouturl(){
        await expect (this.page.url()).toBe("https://www.saucedemo.com/checkout-step-one.html")
        }

        public async clickoncontinue_without_entering_details(firstName : string ,lastname : string, zipcode : string)
        {
            await this.clickcontinue()
            let count=await this.erroricon_X.count()
            //await this.page.pause()
            await expect (count).toBe(4)
                await this.firstname.fill(firstName)
                await this.clickcontinue()
             count=await this.erroricon_X.count()
            await expect (count).toBe(4)
            
            await this.lastname.fill(lastname)
             await this.clickcontinue()
             count=await this.erroricon_X.count()
            await expect (count).toBe(4)
            await this.zipcode.fill(zipcode)
            

        }
/* positive scenerio*/
        public async Enterdetails(firstName : string ,lastname : string, zipcode : string ){
            await this.firstname.fill(firstName)
             await this.lastname.fill(lastname)
             await this.zipcode.fill(zipcode)
        }

        

        public async clickcontinue(){

            await this.continue.click()
        }

}