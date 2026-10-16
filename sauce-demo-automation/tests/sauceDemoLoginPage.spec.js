// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test.describe('Login Functional Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('Verify login page components', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    //Verify components
    await expect(loginPage.title).toBeVisible();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });

  test('Verify login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    //Do Login
    await loginPage.login('standard_user', 'secret_sauce');
    // Verify login is successful and check URL
    await expect(page).toHaveURL(/.*inventory/);
  });

  test('Verify login with invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    //Do Login
    await loginPage.login('wrong_user', 'wrong_password');
    // Verify login is successful and check URL
    await expect(loginPage.errorFailedLoginMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
    await expect(loginPage.errorFailedLoginButton).toBeVisible();
  });

});
