import { Locator, Page } from "@playwright/test";

export class Login_pages{
    page:Page
    username:Locator
    password:Locator
    createnewaccount:Locator


    constructor (page: any){
        this.page=page
        this.username=page.locator('[id="email"]')
        this.password=page.locator('[id="pass"]')
        this.createnewaccount=page.getByTestId('open-registration-form-button')

        

    }

    /* reusable methods keywords to create function*/

    public async launchURL(URL : any){
        await this.page.goto(URL) 
        await this.page.waitForLoadState('load')

    }

    public async login(user : any,pass : any){

          await this.username.fill(user)
          await this.password.fill(pass)
          await this.page.screenshot('screenshot/screenshot.jpeg')

    }

    public async createaccount(){

        await this.createnewaccount.click()
    }}

    



      
    




