import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //if (request.url.indexOf("callback") < 0) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.authService.accessToken}`
            }
          });
        //}

        return next.handle(request);
    }

}
