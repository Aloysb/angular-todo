import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../todos.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    //? I have a feeling that there is a better way to track the state of the call ...
    // Maybe I should look into the HTTP module of Angular?
    // This works, but it feel like there should be an easier way
    this.todosService.getTodos().subscribe(({
      next: todos => {
        this.todos = todos;
        this.isLoading = false;
      },
      error: (err) => {
        this.isError = true;
      },
    }))
  }

}
