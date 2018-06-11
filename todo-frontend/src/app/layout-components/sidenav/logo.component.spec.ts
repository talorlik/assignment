import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ViewboxDirective } from './viewbox.directive';

import { SidenavModule } from './sidenav.module';

describe('LogoComponent', () => {
  let component: TestHostComponent ;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SidenavModule ],
      declarations: [ TestHostComponent ]
    })
    .compileComponents();
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
  template: `<logo><logo>`
}) export class TestHostComponent {

}
