import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavModule } from "../layout-components/sidenav/sidenav.module";
import { ToolbarModule } from "../layout-components/toolbar/toolbar.module";
import { QuickpanelModule } from "../layout-components/quickpanel/quickpanel.module";
import { ScrollbarModule } from "../layout-components/scrollbar/scrollbar.module";

import { AuthModule } from "../auth/auth.module";

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    AuthModule,
    MatSidenavModule,
    SidenavModule,
    ToolbarModule,
    QuickpanelModule,
    ScrollbarModule
  ],
  declarations: [LayoutComponent],
  providers: []
})
export class LayoutModule {}
