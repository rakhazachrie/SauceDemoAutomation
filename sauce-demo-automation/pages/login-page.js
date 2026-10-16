export class LoginPage {
    constructor(page){
        this.page = page;

        // locators
        this.title = page.locator('.login_logo');
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorFailedLoginMsg = page.locator('[data-test="error"]');
        this.errorFailedLoginButton = page.locator('[data-test="error-button"]');;
    }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}