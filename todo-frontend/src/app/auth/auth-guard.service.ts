import { Injectable } from '@angular/core';
import { 
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
  PRIMARY_OUTLET
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // if (this.isPageRefresh()) {
    //   this.router.navigateByUrl(this.getUrlWithoutSecondary(state));
    //   return false;
    // }
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  // I return the requested URL (as defined in the snapshot), less any the "secondary"
  // named-outlet segments.
  private getUrlWithoutSecondary(routerStateSnapshot: RouterStateSnapshot): UrlTree {
    var urlTree = this.router.parseUrl(routerStateSnapshot.url);
    var segment = urlTree.root;

    // Since the "secondary" outlet is known to be directly off the primary view
    // (ie, not nested within another named-outlet), we're going to walk down the
    // tree of primary outlets and delete any "secondary" children. This should
    // leave us with a UrlTree that contains everything that the original URL had,
    // less the "secondary" named-outlet.
    while (segment && segment.children) {
      delete (segment.children.secondary);

      segment = segment.children[PRIMARY_OUTLET];
    }

    return (urlTree);
  }


  // I determine if the current route-request is part of a page refresh.
  private isPageRefresh(): boolean {
    // If the router has yet to establish a single navigation, it means that this
    // navigation is the first attempt to reconcile the application state with the
    // URL state. Meaning, this is a page refresh.
    return (!this.router.navigated);
  }
}