import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { ToolbarComponent } from './toolbar.component';
import { ToolbarQuickpanelToggleComponent } from "./toolbar-quickpanel-toggle.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [
    ToolbarComponent,
    ToolbarQuickpanelToggleComponent
  ],
  exports: [
    ToolbarComponent,
    ToolbarQuickpanelToggleComponent
  ],
  providers: []
})
export class ToolbarModule {}
