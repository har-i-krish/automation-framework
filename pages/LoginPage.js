class LoginPage {

    constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole("link", { name: "Signup / Login" });
    this.email = page.locator("input[data-qa='login-email']");
    this.password = page.locator("input[placeholder='Password']");
    this.loginButton = page.getByRole("button", { name: "Login" });
}

    async goto() {
    await this.page.goto('/');
}
    async openLogin() {
    await this.loginLink.click();
}

    async loginCredentials(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
}

}

module.exports = LoginPage;