class SigninPage {
    constructor(page) {
        this.page = page;
        this.emailInput = this.page.locator('#signin-email');
        this.passwordInput = this.page.locator('#signin-password');
        this.signinButton = this.page.locator('[type=submit]');
    }
    async navigate(url) {
        await this.page.goto(url);
    }
    async enterEmail(email) {
        await this.emailInput.fill(email);
    }
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }
    async clickSignin() {
        await this.signinButton.click();
    }
}
module.exports = { SigninPage };
