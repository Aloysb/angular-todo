import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { asyncData, asyncError } from '@utils/index';
import { Todo } from '@models/todo.model';




export interface ITodosService {
  getTodos(): Observable<Todo[]>
}

@Injectable({
  providedIn: 'root'
})
export class TodosService implements ITodosService {
  constructor() { }
  getTodos(): Observable<Todo[]> {
    return asyncData(mockTodos);
  }
}

export const mockTodos: Todo[] = [
  { id: 1, userId: 1, title: "Clean the kitchen", completed: true },
  { id: 2, userId: 1, title: "Relax", completed: true }
]


type MockTodosServiceConstructor = {
  shouldFail: boolean;
};

export class MockTodosService implements ITodosService {
  readonly shouldFail: boolean;

  constructor({ shouldFail }: MockTodosServiceConstructor = { shouldFail: false }) {
    this.shouldFail = shouldFail;
  }

  getTodos(): Observable<Todo[]> {
    return this.shouldFail ?
      asyncError('Something went wrong') :
      asyncData(mockTodos);
  }
}