import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from "../environments/environment";

@Injectable()
export class ApiService {
  suffix: string;
  model: any;
  private url = environment.apiUrl; //URL to web api
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) { }

  private extractData(res: HttpResponse<any>) {
    return res || {};
  }

  private handleError(error: HttpResponse<any> | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  mapListToModelList(list: Array<Object>) {
    list.forEach((item, index) => {
      list[index] = this.mapModel(item);
    });

    return list;
  }

  mapModel(model: any) {
    return this.model(model);
  }

  // API: GET e.g. /todos
  public getAll(populate: Array<string> = null): Observable<any[]> {
    const url = this.url + '/' + this.suffix;
    let params = new HttpParams();
    if (populate) {
      for (let key in populate) {
        params.set(key, populate[key]);
      }
    }

    return this.http.get<any[]>(url, { headers: this.headers, params: params });
  }
  
  // API: GET e.g. /todos/:id
  public getById(id: number, populate: Array<string> = null): Observable<any> {
    const url = `${this.url + '/' + this.suffix}/${id}`;
    let params = new HttpParams();
    if (populate) {
      for (let key in populate) {
        params.set(key, populate[key]);
      }
    }

    return this.http.get(url, { headers: this.headers, params: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  // API: POST e.g. /todos
  public create(model: any): Observable<any> {
    const url = this.url + '/' + this.suffix;

    return this.http.post(url, model, { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  // API: PUT e.g. /todos/:id
  public update(model: any): Observable<any> {
    const url = `${this.url + '/' + this.suffix}/${model.id}`;

    return this.http.put(url, model, { headers: this.headers })
      .map(() => model)
      .catch(this.handleError);
  }

  // API: DELETE e.g. /todos/:id
  public delete(id: number): Observable<null> {
    const url = `${this.url + '/' + this.suffix}/${id}`;

    return this.http.delete(url, { headers: this.headers })
      .map(() => null)
      .catch(this.handleError);
  }

  // API: Toggle complete e.g. todo.complete
  public toggleComplete(model: any): Observable<any> {
    model.complete = !model.complete;
    return this.update(model);
  }

}
