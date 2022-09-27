import {environment} from "../../src/environments/environment";

describe('Todo list', () => {
  it('displays the list of existing todo when I visist the site', () => {
    // TODO: where to put interfaces?
    interface Todo {id: number, description:string, status: 'done'|'todo'};

    const getTodosUrl = environment.api.getTodos;
    const todos:Todo[] = [
      {id: 1, description: "Clean the kitchen", status: "done"},
      {id: 2, description: "Relax", status: "todo"}
    ]
    cy.intercept('GET', 'api/todos', todos);
    cy.visit('/');
    todos.forEach(({description}) => {
      cy.contains(description);
    })
  })
})
