import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { SidenavItem } from '../types';

const template = `
<mat-list-item [ngClass]="{'divider': item.divider}" >
  <mat-expansion-panel *ngIf="item.children; else singleItem" [ngClass]="{'sidenav-closed': !sidenavOpen}">
    <mat-expansion-panel-header (click)="handleExpansionClick()">
      <mat-panel-title>
        <mat-icon>{{ item.icon }}</mat-icon>
        <span class="sidenav-text">{{ item.title }}</span>
      </mat-panel-title>
    </mat-expansion-panel-header>
    <mat-list>
      <mat-list-item *ngFor="let child of item.children">
        <sidenav-item [item]="child" [sidenavOpen]="sidenavOpen"></sidenav-item>
      </mat-list-item>
    </mat-list>
  </mat-expansion-panel>
  <ng-template #singleItem>
    <hr *ngIf="item.divider; else navLink">
  </ng-template>
  <ng-template #navLink>
     <button mat-button [routerLink]="item.routerLink">
      <mat-icon>{{ item.icon }}</mat-icon>
      <span class="sidenav-text">{{ item.title }}</span>
    </button>
 </ng-template>
</mat-list-item>

`;

@Component({
  selector: 'sidenav-item',
  template
})
export class SidenavItemComponent implements OnInit {

  @Input() item: SidenavItem;
  @Input() sidenavOpen;
  @Output() openParent = new EventEmitter();
  @ViewChild(MatExpansionPanel) expansionPanel;
  @ViewChildren(SidenavItemComponent) itemChildren;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.item.opened) {
      setTimeout(() => (this.expansionPanel.expanded = true), 0);
    }
  }

  handleExpansionClick() {
    this.openSidenav();
    if (!this.expansionPanel.expanded) {
      this.closeExpansionPanel();
    }
  }

  openSidenav() {
    this.openParent.emit();
  }

  closeExpansionPanel() {
    if (this.expansionPanel) {
      this.expansionPanel.expanded = false;
    }
    this.itemChildren.map(item => item.closeExpansionPanel());
  }

}
