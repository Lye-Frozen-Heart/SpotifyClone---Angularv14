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
  
  private setAndReturnBearerToken = (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>=> {
    
      const token = this.cookie.get('token_service');
      let newRequest = request.clone(
        {
        setHeaders : {
          authorization:`Bearer ${token}`
        }
       }
      );
      return next.handle(newRequest);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try{
      return this.setAndReturnBearerToken(request,next);
    }catch(e){
      console.log("Interceptation error: ", e);
      return next.handle(request);
    }
  }
}
