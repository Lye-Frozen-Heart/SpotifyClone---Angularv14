import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookie:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try{
      let newRequest = request;
      const token = this.cookie.get('token_service');
      newRequest = request.clone(
        {
        setHeaders : {
          authorization:`Bearer ${token}`
        }
       }
      );
      return next.handle(newRequest);
    }catch(e){
      console.log("Interceptation error: ", e);
      return next.handle(request);
    }
  }
}
