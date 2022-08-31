import homePage from "../support/page_objects/home-page/home-page";

describe('Verify the collection page', function () {

    beforeEach(() => {
        homePage.go()
        cy.fixture('example.json').then((data) =>{
            this.data=data
         })
    })


    it('navigate to collection page', () => {
        homePage.acceptCookie().click()
        homePage.searchBtn().click
        homePage.searchBtn2().click
        cy.url().should('include', 'collectie');

        cy.get('.heading-1')
            .should('have.text', 'Collectie')
        homePage.typePaintingName().type(this.data.paintingName)
        homePage.searchPainting().click()
        cy.scrollTo('top')

        cy.get('.results')
            .invoke('text')
            .then(parseInt)
            .should('be.greaterThan', 700)

        homePage.selectPainting().click()
        cy.get('section').contains(this.data.paintingName)


        homePage.validatingPainting()
        cy.get('@fNummer')
            .should('be.equal', this.data.Fnummer)
        cy.get('@jhNummer')
            .should('be.equal', this.data.JHnummer)
        cy.get('@inventarisNummer')
            .should('be.equal', this.data.Inventarisnummer)
        cy.url()
            .should('include', this.data.Inventarisnummer);

    })

})