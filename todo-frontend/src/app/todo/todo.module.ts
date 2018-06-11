import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { TodoRoutingModule, todoComponents } from "./todo-routing.module";
import { TodoDataService } from "./todo-data.service";
import { TodoListHeaderComponent } from "./todo-list-header/todo-list-header.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListItemComponent } from "./todo-list/todo-list-item/todo-list-item.component";
import { TodoListFooterComponent } from "./todo-list-footer/todo-list-footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    todoComponents
  ],
  providers: [TodoDataService]
})
export class TodoModule { }
