import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should load the list of todos on first render', () => {
    expect(component.todos).toEqual([]);
    fixture.detectChanges();
    expect(component.todos).toBe(mockTodos);
  })
});
