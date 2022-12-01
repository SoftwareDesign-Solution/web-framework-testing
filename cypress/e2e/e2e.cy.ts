
describe('e2e', () => {

    it ('test', () => {

        cy.visit('/');

        cy.contains('h2.app-title', 'web-framework-testing');

        cy.get('#newTask').click();

        cy.get('#name').type('Hello World!');

        cy.get('#description').type('This task is created with Cypress');

        cy.get('form').submit();

        cy.get('p').contains('This task is created with Cypress').should('have.text', 'This task is created with Cypress');

        //cy.get('#aufgabe_2').find('button.menu-options').click();

        //cy.get('#aufgabe_2').find('a.deleteTask').click();

        cy.get('#aufgabe_2').then((element) => {
            cy.wrap(element).find('button.menu-options').click();
            cy.wrap(element).find('a.deleteTask').click();
         })

        cy.get('#aufgabe_2').should('not.exist');

    });

})