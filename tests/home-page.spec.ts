import { test, expect } from '@playwright/test'

test('should have a working frontpage', async ({ page }) => {
  const goToHomePage = async () => {
    await page.locator('css=header >> css=[aria-label="ACME logo"]').click()
  }

  await page.goto('/')

  // The hero text should be visible
  await expect(page.locator('h1 >> text=ACME')).toBeVisible()
})
