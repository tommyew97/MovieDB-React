/// <reference types="cypress" />


describe("Go from home page to a movie ", () => {

    beforeEach(()=> {
        cy.stub(window, 'fetch')
        .withArgs('http://localhost:8000/movies/')
            .resolves(cy.fixture("movies"))

        cy.visit('http://localhost:3000');
        cy.waitForReact()
    })

    it("Renders project", () => {
        cy.get('.searchField')
        .should('be.visible')   
    })

    // it("Navigate to BrowsePage", () => {

    //     cy.get('.mr-auto > [href="/browse"]').click()
    // })
})
