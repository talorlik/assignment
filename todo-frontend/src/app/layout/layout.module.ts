import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavModule } from "../layout-components/sidenav/sidenav.module";
import { ToolbarModule } from "../layout-components/toolbar/toolbar.module";
import { ScrollbarModule } from "../layout-components/scrollbar/scrollbar.module";

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    SidenavModule,
    ToolbarModule,
    ScrollbarModule
  ],
  declarations: [LayoutComponent],
  providers: []
})
export class LayoutModule {}
