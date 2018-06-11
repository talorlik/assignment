import { Component, Input } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

const template = `
<button mat-icon-button (click)="openQuickpanel()">
  <mat-icon>format_align_right</mat-icon>
</button>
`;

@Component({
  selector: "quickpanel-toggle",
  template
})
export class ToolbarQuickpanelToggleComponent {
  @Input() quickpanel: MatSidenav;

  constructor() {}

  openQuickpanel() {
    this.quickpanel.open();
  }
}
