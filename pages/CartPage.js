class CartPage {

    constructor(page) {
        this.page = page;

        this.productName = page.locator("#product-1").getByRole("link", { name: "Blue Top" });

        this.checkout = page.locator('.btn.btn-default.check_out');
    }

    async proceedToCheckout() {
        await this.checkout.click();
    }
}

module.exports = CartPage;