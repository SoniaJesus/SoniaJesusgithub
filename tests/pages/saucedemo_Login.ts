import { Locator, Page } from "@playwright/test";

export class Saucelogin_pages{

    page:Page
    username:Locator
    password:Locator
    Login:Locator

    constructor (page: any){

        this.page=page
        this.username=page.locator('[data-test="username"]')
        this.password=page.locator('[data-test="password"]')
        this.Login=page.locator('[data-test="login-button"]')
        
    }

    public async launchURL(URL: any){
        await this.page.goto(URL) 

    }

    public async login1(user1 :any, pass1 : any){

          await this.username.fill(user1)
          await this.password.fill(pass1)
          await this.Login.click()
    }

    }



