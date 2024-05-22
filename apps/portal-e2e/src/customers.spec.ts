import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/klanten');
});

test('customer link is active in menu', async ({ page }) => {
  const link = page.getByRole('link', { name: 'Klanten' });
  expect(
    await link.evaluate(el => el.classList.contains('bg-gray-100')),
  ).toBeTruthy();
});

test('has title', async ({ page }) => {
  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Klanten');
});

test('has subtitle', async ({ page }) => {
  expect(await page.locator('p').innerText()).toContain(
    'Een lijst van alle klanten in het systeem met hun voor- en achternaam, e-mail en telefoonnummer.',
  );
});

test('has add button', async ({ page }) => {
  const button = page.getByRole('button', { name: 'Klant toevoegen2' });
  expect(button).toBeDefined();
});

test('has table with headers', async ({ page }) => {
  const expectedText = [
    'Voornaam',
    'Achternaam',
    'E-mail',
    'Telefoonnummer',
    '',
  ];

  const tableHeader = page.getByTestId('customers-table').locator('th');
  const tableHeaderTexts = await tableHeader.allTextContents();
  await tableHeaderTexts.forEach((text, index) => {
    expect(text).toEqual(expectedText[index]);
  });
});

test('has table with edit link in each row', async ({ page }) => {
  const rows = page.getByTestId('customers-table').locator('tbody tr');
  const rowCount = await rows.count();

  for (let i = 0; i < rowCount; i++) {
    const lastCellLink = rows.nth(i).locator('td:last-child a');

    const linkCount = await lastCellLink.count();
    expect(linkCount).toBeGreaterThan(0);

    const text = await lastCellLink.innerText();
    expect(text).toBe('Bewerken');
  }
});
