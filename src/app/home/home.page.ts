import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular'
import {AlertServicesService} from '../services/UI/alert-services.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/model/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users:any;
  user:any;

  constructor(public alert : AlertServicesService,
              public router: Router,
              public userService: UserServiceService) {
              }
  
  login(username : string, password : string){
    if(username.length==0 || password.length==0){
      this.alert.putMsgError('Se requiere un valor', 'El usuario y/o contraseña no pueden estar vacios. Ingrese su usario y/o contraseña para contrinuar');
    }else{
      console.log(this.user);
      console.log(this.getUsers(username, password));
      if(true){
        this.router.navigate(['/dashboard']);
      }
    }
  }

  validateUsername(username: string){
    if(username.length!=0 && (!username.includes("@") || !username.includes(".com"))){
      this.alert.putMsgError('El formato del nombre de usuario no es valido. Verifique e intente nuevamente','Error de formato');
    }
  }

  getUsers(username:string, password:string) {
    this.userService.getUser(username, password)
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
    this.obtainUser();
  }

  obtainUser(){
    for(this.user of this.users){
      console.log(this.user);
    }
  }
}
