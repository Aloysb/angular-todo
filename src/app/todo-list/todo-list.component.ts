import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos:Todo[] = [];

  constructor(private todosService: TodosService) { 
  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos
      console.log('this',this.todos)
    })
  }

}
