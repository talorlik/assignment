import { TestBed, inject } from '@angular/core/testing';

import { HttpClient } from "@angular/common/http";
import { BaseRequestOptions, XHRBackend } from "@angular/http";
import { MockBackend } from "@angular/http/testing";

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useFactory: (backend, options) => {
            return new HttpClient(backend);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        ApiService
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
