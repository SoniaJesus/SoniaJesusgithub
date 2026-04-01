import { expect, Locator, Page } from "@playwright/test";

export class Cart_page{

      page:Page
        yourcart:Locator
      remove:Locator
      updatecount:Locator
      cartitemname:Locator
      checkout : Locator
      

       constructor (page : any){
        this.page=page
         this.remove=page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
         this.yourcart=page.locator('[data-test="title"]')
         this.updatecount=page.locator('[data-test="shopping-cart-badge"]')
         this.cartitemname=page.locator('[data-test="inventory-item-name"]')
         this.checkout=page.locator('[data-test="checkout"]')

       }

       public async verifyyourcarttitle(){
        await expect(this.yourcart).toBeVisible()
       }

        public async verifycarturl(){
        await expect (this.page.url()).toBe("https://www.saucedemo.com/cart.html")
        }

       public async clickremovebutton(){
      await this.remove.click()
     }

     public async verifycartitems(){
      await expect(this.yourcart).toBeVisible()
     }

     public async verifyupdatecount_cart(){
      let updcount =await this.updatecount.textContent()
      await expect (updcount).toBe("2")
     }

    public async verifycartitemname (count : any){
        for (let i=0 ; i<count; i++)
        {
            let description = await this.cartitemname.nth(i).textContent()
            console.log(description)
        }
       
     }

     public async verifycheckout(){
      await this.checkout.click()
     }

}