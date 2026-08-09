const { test } = require('../fixtures/test-fixture');
const { expect } = require('@playwright/test');
const users = require('../test-data/users');

test('Complete Purchase Flow', async ({ page, poManager }) => {

    const login = poManager.getLoginPage();
    const home = poManager.getHomePage();
    const product = poManager.getProductPage();
    const cart = poManager.getCartPage();
    const checkout = poManager.getCheckoutPage();

    // Login
    await login.goto();
    await login.openLogin();

    await login.loginCredentials(
        users.validUser.email,
        users.validUser.password
    );

    await expect(home.loggedInUser).toBeVisible();

    // Products
    await home.openProducts();
    await expect(page).toHaveURL(/products/);

    // Search product
    await product.searchProduct("Blue Top");
    await expect(product.productName).toBeVisible();

    // Open product
    await product.openProduct();
    await expect(product.productTitle).toBeVisible();

    // Add to cart
    await product.addToCart();
    await expect(product.cartAddedMessage).toBeVisible();

    // Cart
    await product.viewCartPage();
    await expect(cart.productName).toBeVisible();

    // Checkout
    await cart.proceedToCheckout();

    // Place order
    await checkout.placeOrder();
});