import homePage from "../support/page_objects/home-page/home-page";

describe('Verify the collection page', function () {

    beforeEach(() => {
        homePage.go()
        cy.fixture('example.json').then((data) => {
            this.data = data
        })
    })

    it('navigate to collection page', () => {
        homePage.acceptCookie().click()
        homePage.searchBtn().click()
        homePage.searchBtn2().click()

        cy.get('.heading-1')
            .should('have.text', 'Collectie')
            .and('be.visible')
        cy.url().should('include', 'collectie');

        homePage.typePaintingName().type( this.data.paintingName)
        homePage.searchPainting().click()
        cy.scrollTo('top')

        cy.get('.results').invoke('text')
            .then(parseInt)
            .should('be.greaterThan', 700)
    })

})