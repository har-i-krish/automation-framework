class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.placeOrderButton = page.locator("a[href='/payment']");
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }
}

module.exports = CheckoutPage;