/// <reference types="cypress" />

import React from "react";
import { mount } from "cypress-react-unit-test";
import Header from "../../src/Components/Header";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../src/Reducers/index";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer);

describe("Header Component", () => {

    it('Displays Links', () => {
        cy.viewport(600, 300)
        mount(
            <Provider store={store} >
                <Router>
                    <Header searchbar={false} />
                </Router>
            </Provider>
        )
        cy.get('nav').should('be.visible')

        cy.contains('nav', 'MovieDB')

        cy.contains('Home')
            .click()
            .location('pathname')
            .should('equal', '/')

        cy.contains('Browse')
            .click()
            .location('pathname')
            .should('equal', '/browse')
    })

    it('Tell if logged in', () => {

    })
})
