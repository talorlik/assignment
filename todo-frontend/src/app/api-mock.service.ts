
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { Todo } from "./classes/todo";

@Injectable()
export class ApiMockService {

  constructor() { }

  public getAll(): Observable<Todo[]> {
    return of([
      new Todo({ id: 1, title: 'Read article', complete: false, order: 1 })
    ]);
  }

  public create(todo: Todo): Observable<Todo> {
    return of(
      new Todo({ id: 1, title: 'Read article', complete: false, order: 1 })
    );
  }

  public getById(todoId: number): Observable<Todo> {
    return of(
      new Todo({ id: 1, title: 'Read article', complete: false, order: 1 })
    );
  }

  public update(todo: Todo): Observable<Todo> {
    return of(
      new Todo({ id: 1, title: 'Read article', complete: false, order: 1 })
    );
  }

  public delete(todoId: number): Observable<null> {
    return null;
  }

}
