# E2E Tests - Cypress UI E2E

This project uses [Cypress](https://www.cypress.io) for UI e2e automate testing.

## Getting Started

### Pre-requisites:

### Install project dependencies
Access the project root and execute the command in the terminal
```
npm install
```
### Test execution

For the first time test execution, you can just execute:

    npx cypress open

This command will open a Cypress execution window, showing all Features, grouped by Services/Folder:

*On first time execution, it could take some time to open, until cypress installation/setup.

You can click on one of then to start a test execution.


### Cypress Basic style test scenarios

This project uses a `cypress-cucumber-preprocessor`, witch means that testing scenarios is wrote in cucumber style BDD using Gherkin language.

If you are not familiar with Cucumber, we recommend reading this [docs](https://cucumber.io/docs/guides/overview).

The “features” files are located on `cypress > integration > features`, separated by services.

	- Gerimedica           
	├── cypress
	│   ├── e2e
	│   │   └── searchingThePainting.spec.cy.js
    |   └──...
	└──...

### Page Objects

Page objects is a common practice and widely used by automated testing projects.

It is located on `cypress > support > page_objects` directory, and we use “-page” suffix to files.

	- Gerimedica              
	├── cypress
	│   ├── support
	│   │   └── page_objects
	|   │       │   ├── home-page
    |   |       |   |       └── home-page.js
    |   │       │   └──...
    |   │       └──...
    |   └──...
	└──...

The idea of use page-objects is to abstract common functions of a UI pages to avoid duplicated code inside `step definitions`, also to improve code readability.

## Autor

* **Fernando Baldo** - *GitHub* - [Fernandobaldo](https://github.com/Fernandobaldo)

