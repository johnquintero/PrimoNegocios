import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { UIAlertService } from '../UITools/uialert.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User;

  constructor(public alert : UIAlertService,
              public router: Router,
              public userService: UserService) {
              }
  
  login(username : string, password : string){
    if(username.length==0 || password.length==0){
      this.alert.putMsgError('Se requiere un valor', 'El usuario y/o contraseña no pueden estar vacios. Ingrese su usario y/o contraseña para contrinuar');
    }else{
      this.getUser(username, password);
      if(!this.user){
        this.alert.putMsgError("El usuario y/o contraseña no son válidos. Verifique e intente nuevamente", "Error al inicar sesión");
      }else{
        this.router.navigate(['/dashboard']);
      }
    }
  }

  validateUsername(username: string){
    if(username.length!=0 && (!username.includes("@") || !username.includes(".com"))){
      this.alert.putMsgError('El formato del nombre de usuario no es valido. Verifique e intente nuevamente','Error de formato');
    }
  }

  getUser(username:string, password:string) {
    this.userService.getUser(username, password);
    this.user = this.userService.user;
    if(!this.userService.user){
      console.log("Usuario obtenido: "+this.userService.user);
    }
  }
}
