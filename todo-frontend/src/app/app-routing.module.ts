import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "./auth/auth-guard.service";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        pathMatch: "full"
      },
      {
        path: "todos",
        canActivate: [AuthGuard],
        loadChildren: "app/todo/todo.module#TodoModule",
        runGuardsAndResolvers: "always"
      }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appComponents = [
  HomeComponent,
  PageNotFoundComponent
];
