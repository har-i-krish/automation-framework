class HomePage{
    constructor(page){
        this.page = page;
        this.loggedInUser = page.getByText("Logged in as");
        this.productsLink = page.getByRole("link", { name: "Products" });
    }

    async openProducts() {
    await this.productsLink.click();
}
}
module.exports = HomePage;