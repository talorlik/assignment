import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SidenavItem } from "../layout-components/types";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  sidenavItems: Array<SidenavItem> = [
    {
      title: "Home",
      icon: "dashboard",
      routerLink: "/"
    },
    {
      title: "Todos",
      icon: "list",
      routerLink: "/todos"
    }
  ];

  initials: string;
  fullName: string;
  loggedin: boolean;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authService.tokenChanged.subscribe((tokenPresent: boolean) => {
      this.loggedin = tokenPresent;

      this.fullName = this.authService.userProfile.name;
      this.initials = this.fullName.substr(0, 1).toUpperCase();
    });
  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
