import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';

import { ToolbarModule } from './toolbar.module';

describe('ToolbarComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ToolbarModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ],
      declarations: [TestHostComponent],
      providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
    template: `<toolbar [searchResults]="searchResults"></toolbar>`
  })
  class TestHostComponent {
  searchResults: string[] = [
    'one',
    'two',
    'three',
    'four'
  ];
}
