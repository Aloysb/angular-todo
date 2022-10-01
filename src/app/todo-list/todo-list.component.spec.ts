import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { mockTodos, MockTodosService, TodosService } from '../todos.service';

import { TodoListComponent } from './todo-list.component';


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  const mockTodosService = new MockTodosService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers:[{provide:TodosService, useValue: mockTodosService}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the list of todos on first render', fakeAsync(() => {
    expect(component.todos).withContext('no todo to start').toEqual([]);
    /**
     * Note that I don't test that the service is called.
     * In my opinion, it's an implementation details.
     * From a user perspective, I want my todos loaded, I don't need to know where they are coming from.
     * Also we can argue that then I should only tests that they are available on the screen?
     * That's a valid point, but hey, I'm only using Angular for the first time :) 
     * */
    fixture.detectChanges();
    tick();
    expect(component.todos).withContext("todo are loaded").toBe(mockTodos);
  }));
});
