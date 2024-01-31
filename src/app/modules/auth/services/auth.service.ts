import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient,private cookie:CookieService) { }

  //Callback to set the cookie Token
  private setCookieToken = (response:any) =>{
    const {tokenSession} = response;
    this.cookie.set('token_service',tokenSession,4,'/');
  }

  //Callback to catch the error
  private catchStatusError = (error:any) => {
    const {status, statusText} = error;
    console.log('Review me, status: ',[status,statusText]);
    return of([]);
  }
  //Call the above wroten functions to catch or set the cookie
  private authorizeLogin = (body:any) => {
    return this.http.post(
    `${this.URL}/auth/login`,body).pipe(
      tap(
      { 
        next: (response:any) => this.setCookieToken(response),
        error: (error:any) => this.catchStatusError(error)
      }));  
  }

  //Send credentials passing the body from a parameter
  sendCredentials(email:string,password:string):Observable<any>{
    const body = {email,password};
    return this.authorizeLogin(body);
  }
}
