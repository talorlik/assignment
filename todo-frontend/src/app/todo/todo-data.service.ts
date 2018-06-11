import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../classes/todo";
import { ApiService } from "../api.service";

@Injectable()
export class TodoDataService extends ApiService {
  constructor(http: HttpClient) {
    super(http);

    this.suffix = "todos";
    this.model = (construct: any) => {
      return new Todo(construct);
    };
  }
}
