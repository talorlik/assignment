import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavModule } from './sidenav.module';

describe('SidenavComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        SidenavModule,
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
  template: `<sidenav [items]="items"></sidenav>`
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
}
