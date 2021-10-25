import { Injectable } from '@angular/core';
import { CustomerLoginService } from './customer-login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthService {

  custLoggedIn: boolean = false;

  constructor(private customerLoginService: CustomerLoginService) { }

  custlogin():void {
    this.custLoggedIn = true ;
   //users = JSON.parse(localStorage.getItem('cband')) ;
  }

  custlogout():void{
    this.custLoggedIn = false;
  }
  get isCustLoggedIn():boolean{
    return this.custLoggedIn;
  }

}
