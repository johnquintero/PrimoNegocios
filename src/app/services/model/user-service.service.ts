import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URLService } from '../navigation/url.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  urlInk:string='';
  userItem:any;

  constructor(private client: HttpClient,
              private urlService:URLService) {}

  getUser(username:string, password:string){
    this.urlInk=this.urlService.PR_LOGIN_URL;
    this.urlInk=this.urlInk.replace('username', username);
    this.urlInk=this.urlInk.replace('password', password);
    this.urlInk=this.urlInk.replace('usrtype', '1');
    console.log("URL WS: "+this.urlInk);
    return new Promise(resolve => {
      this.client.get(this.urlInk).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
