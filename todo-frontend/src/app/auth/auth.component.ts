import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  url: string = "";

  constructor(
    private router: Router,
    private authService : AuthService
  ) {
    this.url = this.router.url.split("#")[0];

    switch (this.url) {
      case "/callback":
        this.handleLogin();
        break;

      case "/login":
        this.login();
        break;

      case "/logout":
        this.logout();
        break;

      default:
        this.router.navigate(["**"]);
        break;
    }
  }

  ngOnInit() {}

  public handleLogin() {
    this.authService.handleLoginCallback();
  }

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }
}
