/// <reference types="cypress" />

describe("API testing", {
    baseUrl: "http://it2810-75.idi.ntnu.no:8000",
    responseTimeout: 5000
}, () => {

    context("Testing movies endpoint", () => {

        const getMovies = () => {
            return cy.request('/movies/').its('body')
        }

        
        const getMovie = (id: number) => {
            return cy.request(`/movies/${id}`).its('body')
        }

        
        const postMovie = (movie: {}) => {
            return cy.request('POST', '/movies', movie)
        }

        it('It loads JSON items', () => {
            cy.request('/movies')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
        })

        it('It gives the right attributes', () => {
            const id: number = Cypress._.random(0, 100)

            getMovie(id)
            .should('include.all.keys', {"id": id})
        })

        // it('Can add movies items', () => {

            
        // })
    }) 
})
