import {
  Component,
  OnInit,
  Input
} from '@angular/core';

const template = `
<mat-toolbar class="justify-between align-center">
  <div *ngIf="loggedin">
    <button mat-button [matMenuTriggerFor]="menu" class="btn-padding">
      <a mat-mini-fab color="primary"><strong>{{ initials }}</strong></a>
      <span>{{ fullName }}</span>
      <mat-icon color="primary">arrow_drop_down</mat-icon>
    </button>
    <mat-menu #menu="matMenu" [overlapTrigger]="false">
      <button mat-menu-item routerLink="/logout">
        <mat-icon color="primary">exit_to_app</mat-icon>
        <span>Logout</span>
      </button>
    </mat-menu>
  </div>
  <div *ngIf="!loggedin">
    <button mat-menu-item routerLink="/login">
      <mat-icon color="primary">exit_to_app</mat-icon>
      <span>Login</span>
    </button>
  </div>
</mat-toolbar>
`;

@Component({
  selector: "toolbar",
  template
})
export class ToolbarComponent implements OnInit {
  @Input() initials: string;
  @Input() fullName: string;
  @Input() loggedin: boolean;

  constructor() {}

  ngOnInit() {}
}
