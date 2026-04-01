import {test,expect, chromium} from "@playwright/test"
import { Saucelogin_pages } from "./pages/saucedemo_Login"
import { Product_page } from "./pages/saucedemo_productpages"
import { Cart_page } from "./pages/saucedemo_yourcart"
import { Checkout_page } from "./pages/saucedemo_checkout"
import { Finish_page } from "./pages/saucedemo_finishpage"
//let page
test.afterAll(async()=>{ // this is to execute after all like Testng
//await page.close()
console.log("afterAll")



})

test.beforeEach(async({page})=>{ // this is to execute before all like Testng
console.log("before all")
//const browser = await chromium.launch()
    /* Context Fixture*/
   // const context = await browser.newContext()
   //   page = await context.newPage()
const Saucedemo_Login1=new Saucelogin_pages(page)
await Saucedemo_Login1.launchURL("https://www.saucedemo.com/")

})

test.beforeAll(async()=>{ // this is to execute beforeEach like Testng
console.log("beforeEach")

})

test.afterEach(async()=>{ // this is to execute afterEach  like Testng
console.log("afterEach")

})

test(" @daily title:Login", async({page})=>{

    const env1=process.env.ENV ||"qa"
    const Saucedemo_Login1=new Saucelogin_pages(page)
    const saucedemo_productpages1 = new Product_page(page)
    const saucedemo_yourcart1=new Cart_page(page)
    const saucedemo_checkout1= new Checkout_page(page)
    const saucedemo_finishpage1 = new Finish_page(page)

   // await Saucedemo_Login1.launchURL("https://www.saucedemo.com/")
    await Saucedemo_Login1.login1("standard_user", "secret_sauce")
    await page.screenshot ({path:'screenshot/screenshot.jpeg'})
    await saucedemo_productpages1.verifytitle()
    await saucedemo_productpages1.verifyurl()
    
    await saucedemo_productpages1.verifydropdown("az")
    await saucedemo_productpages1.verifydropdown("za")
    await saucedemo_productpages1.verifydropdown("hilo")
    await saucedemo_productpages1.verifydropdown("lohi")
    await saucedemo_productpages1.clickaddtocart(3)
    await saucedemo_productpages1.verifycartitems()
   await saucedemo_productpages1.clickcartitems() 
     await saucedemo_yourcart1.verifyyourcarttitle()
     await saucedemo_yourcart1.verifycarturl()
     await saucedemo_yourcart1.clickremovebutton()
     await saucedemo_yourcart1.verifycartitems()
     await saucedemo_yourcart1.verifyupdatecount_cart()
     await saucedemo_yourcart1.verifycartitemname(2)
     await saucedemo_yourcart1.verifycheckout()
     await saucedemo_checkout1.verifycheckouturl()
     await saucedemo_checkout1.verifyyourcheckouttitle()
     await saucedemo_checkout1.verifyyourcheckouttitle();
     await saucedemo_checkout1.clickoncontinue_without_entering_details("Jesus", "Sonia","12345")
   //  await saucedemo_checkout1.Enterdetails("Jesus", "Sonia","12345")
    //await page.pause()
     await saucedemo_checkout1.clickcontinue()
     //await page.pause()
     await saucedemo_finishpage1.verifyFinishURL()
     await saucedemo_finishpage1.verifyfinishpagetitle()
     await saucedemo_finishpage1.Clickfinishbutton()  
     //await page.pause()
     console.log (process.env.USERNAME as String) //This cmd is variables from environment file ex: qa or uat


})

import { Login_pages } from "./pages/login_pages"
// /*test(" @facebook @daily  title:Login" , async()=>{


//     /*create a Browser Fixture */
//    // const browser = await chromium.launch()
//     /* Context Fixture*/
//    // const context = await browser.newContext()npx playwright test facebook.spec.ts --headed 

//    // const context1 =await browser.newContext()
//     const page1 = await context1.newPage()
//     /*Page Fixture*/
//     const page = await context.newPage()

//     //await page.pause()
//     const login_pages=new Login_pages(page)
//     await login_pages.launchURL("https://www.facebook.com/")
//     await login_pages.login("Sonia", "Jesus")
//     await login_pages.createaccount()
// }) 
