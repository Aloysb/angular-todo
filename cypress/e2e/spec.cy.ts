import {environment} from "../../src/environments/environment";

describe('Todo list', () => {
  it('displays the list of existing todo when I visist the site', () => {
    // TODO: where to put interfaces?
    interface Todo {
      userId: number,
      id: number,
      title: string
      completed: boolean,
    }

    const getTodosUrl = environment.api.routes.getTodos;
    const todos:Todo[] = [
      {id: 1, userId: 1, title: "Clean the kitchen", completed: true},
      {id: 2, userId:1, title: "Relax", completed: true}
    ]
    cy.intercept('GET', environment.api.routes.getTodos, todos);
    cy.visit('/');
    todos.forEach(({title}) => {
      cy.contains(title);
    })
  })
})
