import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLService {
  restServerAccess:string='http://192.168.0.181:8084/';
  PR_LOGIN_URL:string=this.restServerAccess+'PrimoApp/login/username/password/usrtype';
  constructor() { }
}
