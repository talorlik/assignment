import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Todo } from "../classes/todo";
// Import class so we can use it as dependency injection token in the constructor
import { TodoDataService } from "./todo-data.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data
      .map((data) => data['todos'])
      .subscribe((todos) => {
        this.todos = this.todoDataService
          .mapListToModelList(todos)
          .map(todo => todo as Todo);
      });
  }

  onAddTodo(todo) {
    this.todoDataService
      .create(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  // Service is now available as this.todoDataService
  onToggleTodoComplete(todo) {
    this.todoDataService
      .toggleComplete(todo)
      .subscribe((updatedTodo) => {
        todo = updatedTodo;
      });
  }

  onRemoveTodo(todo) {
    this.todoDataService
      .delete(todo.id)
      .subscribe((_) => {
        this.todos = this.todos.filter((t: Todo) => t.id !== todo.id);
      });
  }

}
