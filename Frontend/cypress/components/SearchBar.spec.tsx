/// <reference types="cypress" />

import React from 'react';
import { mount } from "cypress-react-unit-test";
import SearchBar from '../../src/Components/SearchBar';
import { createStore } from 'redux';
import rootReducer from '../../src/Reducers';
import { Provider} from 'react-redux';
import { ok } from 'assert';

const store = createStore(rootReducer);


describe("SearchBar", () => {

    
    it('Mounts the component without suggestions.', () => {

        mount(
        <Provider store={store}>
                <SearchBar showSuggestions={false} longText={false} />
        </Provider>
        )
        
        cy.get('.searchField').should('be.visible');
        
        // cy.get('store')
    })

})
