import { Component, Output, EventEmitter } from "@angular/core";

import { Todo } from "../../classes/todo";

@Component({
  selector: "app-todo-list-header",
  templateUrl: "./todo-list-header.component.html",
  styleUrls: ["./todo-list-header.component.scss"]
})
export class TodoListHeaderComponent {
  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}