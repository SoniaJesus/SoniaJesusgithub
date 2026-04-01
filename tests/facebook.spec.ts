import {test,expect, chromium} from "@playwright/test"
import { Login_pages } from "./pages/login_pages"

test(" @facebook   title:Login" , async()=>{


    /*create a Browser Fixture */
    const browser = await chromium.launch()
    /* Context Fixture*/
    const context = await browser.newContext()

    const context1 =await browser.newContext()
    const page1 = await context1.newPage()
    /*Page Fixture*/
    const page = await context.newPage()

    //await page.pause()
    const login_pages=new Login_pages(page)
    await login_pages.launchURL("https://www.facebook.com/")
    await login_pages.login("Sonia", "Jesus")
    await login_pages.createaccount()
})