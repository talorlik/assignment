import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from "./auth/auth.module";
import { LayoutModule } from "./layout/layout.module";
import { AppRoutingModule, appComponents } from "./app-routing.module";

import { AppComponent } from './app.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    appComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
