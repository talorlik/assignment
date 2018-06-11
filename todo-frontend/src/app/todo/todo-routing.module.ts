import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { TodoResolver } from "./todo.resolver";

const todoRoutes: Routes = [
  {
    path: "",
    component: TodoComponent,
    resolve: {
      todos: TodoResolver
    }
  },
  {
    path: ":id",
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  providers: [TodoResolver],
  exports: [RouterModule]
})
export class TodoRoutingModule {}

export const todoComponents = [TodoComponent];
