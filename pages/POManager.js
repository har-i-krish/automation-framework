const LoginPage = require('./LoginPage');
const HomePage = require('./HomePage');
const ProductPage = require('./ProductPage');
const CartPage = require('./CartPage');
const CheckoutPage = require('./CheckoutPage');

class POManager {

    constructor(page) {
        this.page = page;

        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getProductPage() {
        return this.productPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getCheckoutPage() {
        return this.checkoutPage;
    }
}

module.exports = POManager;