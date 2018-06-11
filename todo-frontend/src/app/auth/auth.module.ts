import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthInterceptor } from "./auth.interceptor";
import { AuthRoutingModule, authComponent } from './auth-routing.module';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [authComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [authComponent],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {}
