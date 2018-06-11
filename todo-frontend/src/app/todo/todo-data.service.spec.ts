import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { Todo } from "../classes/todo";
import { TodoDataService } from './todo-data.service';
import { ApiService } from "../api.service";
import { ApiMockService } from "../api-mock.service";

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  // describe('#getAll()', () => {

  //   it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
  //     expect(service.getAll()).toEqual([]);
  //   }));

  //   it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.create(todo1);
  //     service.create(todo2);
  //     expect(service.getAll()).toEqual([todo1, todo2]);
  //   }));

  // });

  // describe('#save(todo)', () => {

  //   it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.create(todo1);
  //     service.create(todo2);
  //     expect(service.getById(1)).toEqual(todo1);
  //     expect(service.getById(2)).toEqual(todo2);
  //   }));

  // });

  // describe('#delete(id)', () => {

  //   it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.create(todo1);
  //     service.create(todo2);
  //     expect(service.getAll()).toEqual([todo1, todo2]);
  //     service.delete(1);
  //     expect(service.getAll()).toEqual([todo2]);
  //     service.delete(2);
  //     expect(service.getAll()).toEqual([]);
  //   }));

  //   it('should not removing anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.create(todo1);
  //     service.create(todo2);
  //     expect(service.getAll()).toEqual([todo1, todo2]);
  //     service.delete(3);
  //     expect(service.getAll()).toEqual([todo1, todo2]);
  //   }));

  // });

  // describe('#update(id, values)', () => {

  //   it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo = new Todo({id: 1, title: 'Hello 1', complete: false});
  //     service.create(todo);
  //     let updatedTodo = service.update({
  //       title: 'new title'
  //     });
  //     expect(updatedTodo.title).toEqual('new title');
  //   }));

  //   it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo = new Todo({id: 2, title: 'Hello 1', complete: false});
  //     service.create(todo);
  //     let updatedTodo = service.update({
  //       title: 'new title'
  //     });
  //     expect(updatedTodo).toEqual(null);
  //   }));

  // });

  // describe('#toggleTodoComplete(todo)', () => {

  //   it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.create(todo);
  //     let updatedTodo = service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(true);
  //     service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(false);
  //   }));

  // });

});
