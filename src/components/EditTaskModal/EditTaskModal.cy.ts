import EditTaskModal from './EditTaskModal.vue';
import type Task from "@/models/Task";

describe('EditTaskModal', () => {

    it('mounted', () => {

        cy.viewport(700, 600);

        const task: Task = {
            id: 'hello-world',
            name: 'Hello World!',
            description: 'This task is created with Cypress'
        };

        const onSaveTaskSpy = cy.spy().as('onSaveTaskSpy');

        cy.mount(EditTaskModal, {
            props: {
                onSaveTask: onSaveTaskSpy
            }
        });

        cy.get('#name').type('Hello World!');

        cy.get('#description').type('This task is created with Cypress');

        cy.get('form').submit();

        cy.get('@onSaveTaskSpy').should('have.been.calledWith', task);

    })
})