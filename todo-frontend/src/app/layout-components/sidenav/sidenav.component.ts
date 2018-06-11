import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { SidenavItemComponent } from './sidenav-item.component';
import { SidenavItem } from '../types';

const template = `
<mat-drawer-container flex layout="row" layout-fill class="sidenav-container">
  <mat-drawer flex="none" layout="column" class="sidenav" mode="side" opened="true" [ngClass]="{'closed': !sidenavOpen}">
    <logo #logo></logo>
    <button class="sidenav-toggle" mat-mini-fab color="primary" (click)="toggle()">
      <mat-icon>keyboard_arrow_left</mat-icon>
    </button>
    <mat-list>
      <sidenav-item *ngFor="let item of items" (openParent)="openSidenav()" [item]="item" [sidenavOpen]="sidenavOpen"></sidenav-item>
    </mat-list>
  </mat-drawer>
  <mat-drawer-content flex layout="column" class="content">
    <ng-content></ng-content>
  </mat-drawer-content>
</mat-drawer-container>
`;

@Component({
  selector: 'sidenav',
  template
})
export class SidenavComponent implements OnInit {

  @Input() items: Array<SidenavItem>;
  @ViewChild('logo') logo;
  @ViewChildren(SidenavItemComponent) sidenavItems;
  sidenavOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.sidenavOpen ? this.closeSidenav() : this.openSidenav();
  }

  openSidenav() {
    this.sidenavOpen = true;
    this.logo.grow();
  }

  closeSidenav() {
    this.sidenavOpen = false;
    this.logo.shrink();
    this.closeExpansionPanels();
  }

  closeExpansionPanels() {
    this.sidenavItems.map(item => {
      if (item) {
        item.closeExpansionPanel();
      }
    });
  }

}
