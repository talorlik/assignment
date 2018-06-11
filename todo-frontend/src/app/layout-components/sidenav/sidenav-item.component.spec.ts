import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SidenavModule } from './sidenav.module';

describe('SidenavItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SidenavModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [TestHostComponent]
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
  template: `<sidenav-item *ngFor="let item of items" [item]="item" [sidenavOpen]="sidenavOpen"></sidenav-item>`
}) class TestHostComponent {

  items = [
    {
      title: 'demo home',
      icon: 'home',
      routerLink: '/demo'
    },
    {
      title: 'test',
      icon: 'menu',
      routerLink: 'test'
    },
    {
      divider: true,
    },
    {
      title: 'textExpansion',
      icon: 'menu',
      children: [
        {
          title: 'child 1',
          routerLink: '/test'
        },
        {
          title: 'child 2',
          routerLink: '/test',
          children: [
            {
              title: 'second child 1'
            },
            {
              title: 'second child 2',
              children: [
                {
                  title: 'third child 1'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  sidenavOpen = false;

}
