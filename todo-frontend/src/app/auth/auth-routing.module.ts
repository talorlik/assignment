import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';

export const authRoutes: Routes = [
  {
    path: 'callback',
    component: AuthComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'logout',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule { }

export const authComponent = [AuthComponent];
