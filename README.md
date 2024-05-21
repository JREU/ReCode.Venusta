![example workflow](https://github.com/versure/venusta/actions/workflows/ci.yml/badge.svg)

# Venusta

Venusta is an application which can be used to manage your salon. You can manage your customers, manage appointments and Venusta helps you with your bookkeeping. Venusta is currently in development and on the road to a Minimum Viable Product (MVP).

## Setup

First make sure you've installed all dependencies by running `npm ci`.

This should install all dependencies and also set up our git hooks; these format files before committing.
If the git hooks didn't get configured properly by npm ci you can set them up by running: `npx husky`

To start the development server run `nx serve portal`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Tests

Venusta contains multiple tests that helps improve and maintain the quality of the application.

### End-to-end (e2e)

Venusta contains multiple e2e tests built using [Playwright](https://playwright.dev/). You can run these e2e tests in two different modes:

- Default
- UI

All required dependencies for playwright should be installed and set up as part of the initial npm ci. In case this doesn't work, running `npx playwright` install should install any missing dependencies.

#### Default

You can run the e2e tests by running `nx run portal-e2e:e2e`.

By default the e2e tests will run from your command line. This mode is useful during your CI process.

#### UI

You can run the e2e tests in ui mode by running `nx run portal-e2e:e2e:ui`.

UI mode gives you a test ui which you can use to see all the test files and running them independently. This is useful during the process of creating or updating e2e tests, because it will give you some more context whilst the tests are running.

For more info please visit: https://playwright.dev/docs/test-ui-mode
