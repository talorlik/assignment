import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { TodoDataService } from "../todo/todo-data.service";
import { TodoListHeaderComponent } from "../todo/todo-list-header/todo-list-header.component";
import { TodoListComponent } from "../todo/todo-list/todo-list.component";
import { TodoListItemComponent } from "../todo/todo-list/todo-list-item/todo-list-item.component";
import { TodoListFooterComponent } from "../todo/todo-list-footer/todo-list-footer.component";
import { TodoComponent } from "./todo.component";

import { Todo } from "../classes/todo";
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";
import { ApiService } from "../api.service";
import { ApiMockService } from "../api-mock.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

describe("TodoComponent", () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [
        TodoListHeaderComponent,
        TodoListComponent,
        TodoListItemComponent,
        TodoListFooterComponent,
        TodoComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.of({
              todos: []
            })
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('should display "Todos" in h1 tag', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("Todos");
  }));
});
