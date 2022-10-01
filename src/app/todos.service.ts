import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: true
  };

export interface ITodosService {
  getTodos():Observable<Todo[]>
}

@Injectable({
  providedIn: 'root'
})
export class TodosService implements ITodosService{
  constructor() { }
  getTodos(): Observable<Todo[]> {
    throw new Error('Method not implemented.');
  }
}

export const mockTodos:Todo[] = [
  {id: 1, userId: 1, title: "Clean the kitchen", completed: true},
  {id: 2, userId:1, title: "Relax", completed: true}
]

export class MockTodosService implements ITodosService {
  constructor(){}

  getTodos(): Observable<Todo[]> {
    return of(mockTodos)
  }
}