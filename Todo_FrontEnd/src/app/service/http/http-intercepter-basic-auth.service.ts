import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authintication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private tt:BasicAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = "alaaward"
    // let password = "ward"
    // let basicauthheaderstring = 'Basic ' + window.btoa(username + ":" + password)
    let basicauthheaderstring=this.tt.getAuthenticatedToken()
    let username=this.tt.getAuthenticatedUser()
    if(basicauthheaderstring &&username ){
    request = request.clone({
      setHeaders: {
        Authorization: basicauthheaderstring
      }
    })
  }
    return next.handle(request);
  }
}
