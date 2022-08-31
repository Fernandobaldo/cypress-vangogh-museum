import homePage from "../support/page_objects/home-page/home-page";

describe('Verify the collection page', function () {

  beforeEach(() => {
    homePage.go()
  })

  it('navigate to collection page', () => {
    homePage.acceptCookie().click()
    homePage.searchBtn().click()
    homePage.searchBtn2().click()
    cy.get('.heading-1')
      .should('have.text', 'Collectie')
    cy.url().should('include', 'collectie');
  })
})