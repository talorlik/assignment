import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SidenavComponent } from './sidenav.component';
import { SidenavItemComponent } from './sidenav-item.component';
import { LogoComponent } from './logo.component';

import { ViewboxDirective } from './viewbox.directive';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  declarations: [
    SidenavComponent,
    SidenavItemComponent,
    LogoComponent,
    ViewboxDirective
  ],
  exports: [
    SidenavComponent,
    SidenavItemComponent,
    LogoComponent,
    ViewboxDirective
  ]
}) export class SidenavModule {}
