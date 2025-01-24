import { expect, test } from '@playwright/test';

test('home page has expected button', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('button')).toBeVisible();
});
