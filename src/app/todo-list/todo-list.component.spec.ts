import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { mockTodos, MockTodosService, TodosService } from '../todos.service';

import { TodoListComponent } from './todo-list.component';


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let template: HTMLElement;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{ provide: TodosService, useValue: new MockTodosService() }]
    })
      .compileComponents();
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a loading state while waiting for the todos', fakeAsync(() => {
    /**
     * I would normally test the the loading state as part of the happy path (successful return from the server),
     * but as I'm unfamiliar with Angular I want to take baby steps.
     */
    fixture.detectChanges();
    expect(template.textContent)
      .withContext('show a loading state while fetching the todos')
      .toMatch(/loading/i);
    expect(component.todos).withContext('no todo to start').toEqual([]);
  }))
  it('should load the list of todos on first render', fakeAsync(() => {
    /**
     * Note that I don't test that the service is called.
     * In my opinion, it's an implementation detail.
     * From a user perspective, I want my todos loaded, I don't need to know where they are coming from.
     * Also we can argue that then I should only tests that they are available on the screen?
     * That's a valid point, but hey, I'm only using Angular for the first time :) 
     * */
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    tick();
    expect(component.todos).withContext("todo are loaded").toBe(mockTodos);
    mockTodos.forEach(({ title }) => {
      const regexp = new RegExp(title, "i");
      expect(fixture.nativeElement.textContent).withContext(`contains todo ${title}`).toMatch(regexp);
    })
  }));

  it('should show an error state if there is an error fetching the todos', fakeAsync(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{ provide: TodosService, useValue: new MockTodosService({ shouldFail: true }) }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    template = fixture.nativeElement;

    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    tick();

    expect(template.textContent).withContext('failed call to getTodos').toMatch(/error/i);
  }))

});
