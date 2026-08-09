class ProductPage {

    constructor(page) {
        this.page = page;

        this.searchBox = page.locator("#search_product");
        this.searchBtn = page.locator("#submit_search");
        this.productName = page.getByText("Blue Top", { exact: true }).first();
        this.productDetails = page.locator("a[href='/product_details/1']");
        this.productTitle = page.getByRole("heading", { name: "Blue Top" });

        this.addToCartButton = page.getByRole("button", { name: "Add to cart" });
        this.cartAddedMessage = page.getByText("Your product has been added to cart.");
        this.viewCart = page.getByRole("link", { name: "View Cart" });
    }

    async searchProduct(productName) {
        await this.searchBox.fill(productName);
        await this.searchBtn.click();
    }

    async openProduct() {
        await this.productDetails.click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async viewCartPage() {
        await this.viewCart.click();
    }
}

module.exports = ProductPage;