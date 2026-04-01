import { expect, Locator, Page } from "@playwright/test";

export class Product_page{

     page:Page
     product:Locator
     addtocart:Locator
     cart:Locator
     dropdown:Locator
   



     constructor (page : any){
        this.page=page
        this.product=page.locator('[data-test="title"]')
        this.addtocart=page.locator('[id^="add-to-cart"]')
        this.cart=page.locator('[data-test="shopping-cart-link"]')
        this.dropdown=page.locator('[data-test="product-sort-container"]')
       



     }
      
     public async verifytitle(){
        await expect(this.product).toBeVisible()

     }

     public async verifyurl(){
      await this.page.waitForURL ("https://www.saucedemo.com/inventory.html")
        await expect (this.page.url()).toBe("https://www.saucedemo.com/inventory.html")
        await this.page.waitForTimeout(5000)

     }

     public async verifydropdown(value){
      await this.dropdown.waitFor({state : "visible"})
      await this.dropdown.selectOption(value)
      //await this.page.pause
     }
     

     public async clickaddtocart(count : any){
        for (let i=0 ; i<count; i++)
        {
            await this.addtocart.nth(i).click()
        }
       
     }

     public async verifycartitems(){
      await expect(this.cart).toBeVisible()

     }

     public async clickcartitems(){
      await this.cart.click()
     }

     


}