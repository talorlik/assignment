import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarQuickpanelToggleComponent } from './toolbar-quickpanel-toggle.component';

describe('QuickpanelToggleComponent', () => {
  let component: ToolbarQuickpanelToggleComponent;
  let fixture: ComponentFixture<ToolbarQuickpanelToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarQuickpanelToggleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarQuickpanelToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
