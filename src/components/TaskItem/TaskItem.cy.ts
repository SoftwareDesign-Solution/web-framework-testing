//import {describe, it} from "vitest";
import TaskItem from './TaskItem.vue';
import type Task from "@/models/Task";

describe('TaskItem', () => {

    it('mount', () => {

        const task: Task = {
            id: 'Aufgabe 1',
            name: 'Aufgabe 1',
            description: 'Dies ist eine Aufgabenbeschreibung'
        };

        const changeStateSpy = cy.spy().as('changeStateSpy');
        const editTaskSpy = cy.spy().as('editTaskSpy');
        const deleteTaskSpy = cy.spy().as('editTaskSpy');

        cy.mount(TaskItem, {
            props: {
                task: task,
                onChangeState: changeStateSpy
            }
        });

        cy.get('h3.taskName').click();

        //cy.get('@changeStateSpy').should('have.been.called');

        cy.get('@changeStateSpy').should('have.been.calledWith', task.id);

    });

    it('menuOptions/editTask', () => {

        const task: Task = {
            id: 'Aufgabe 1',
            name: 'Aufgabe 1',
            description: 'Dies ist eine Aufgabenbeschreibung'
        };

        const editTaskSpy = cy.spy().as('editTaskSpy');

        cy.mount(TaskItem, {
            props: {
                task: task,
                onEditTask: editTaskSpy
            }
        });

        cy.get('button.menu-options').click();

        cy.get('a.editTask').click();

        cy.get('@editTaskSpy').should('have.been.calledWith', task.id);

    });

    it('menuOptions/deleteTask', () => {

        const task: Task = {
            id: 'Aufgabe 1',
            name: 'Aufgabe 1',
            description: 'Dies ist eine Aufgabenbeschreibung'
        };

        const deleteTaskSpy = cy.spy().as('deleteTaskSpy');

        cy.mount(TaskItem, {
            props: {
                task: task,
                onDeleteTask: deleteTaskSpy
            }
        });

        cy.get('button.menu-options').click();

        cy.get('a.deleteTask').click();

        cy.get('@deleteTaskSpy').should('have.been.calledWith', task.id);

    });

})