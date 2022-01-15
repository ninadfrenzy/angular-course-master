import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if(req.url == 'http://localhost:3000/api/v1/users' || req.url == 'http://localhost:3000/api/v1/auth') {
        return next.handle(req); 
      } else {
        let token = this.authService.getUserToken();
        let authString = '';
        if(token) {
          authString = authString + 'Token '+token;
        }
        let modifiedReq = req.clone({
          headers: req.headers.append('Authorization', authString)
        });
        return next.handle(modifiedReq);
      }
     
  }
}
