// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// @Component({
//   selector: 'app-customer-login',
//   templateUrl: './customer-login.component.html',
//   styleUrls: ['./customer-login.component.css']
// })
// export class CustomerLoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoginService } from '../customer-login.service';
import { CurrentCustomer } from '../model/currentCustomer';
import { CustomerLogin } from '../model/customer-login';
// import { Customer-login } from '../app/model/b';
// import { CurrentBand } from '../approval/model/currentBand';
// import { BandLoginService } from '../band-login.service';


@Component({
    selector: 'app-customer-login',
    templateUrl: './customer-login.component.html',
    styleUrls: ['./customer-login.component.css']
  })
export class CustomerLoginComponent implements OnInit {

  customerCurrentLogin: CustomerLogin={
    email:"",
    password:""
  }
  private _loggedInCustomer: CurrentCustomer={
    id:0,
    name:""
  }
  get loggedInCustomer(){
    return this._loggedInCustomer;
  }
  set loggedInCustomer(value: CurrentCustomer){
    this._loggedInCustomer = value;
  }
  error!: HttpErrorResponse;
  fail:boolean = false;
  constructor(private customerLoginService:CustomerLoginService ,private _router:Router) { }

  ngOnInit(): void {
  }
  customerLoginButton():void{
    console.log(this.customerCurrentLogin);
    this.customerLoginService.checkCustomerLogin(this.customerCurrentLogin).subscribe(
     data=>{
      this._loggedInCustomer=data;
      localStorage.setItem('cCust',JSON.stringify(this._loggedInCustomer));
      console.log(data);
      this.fail=false;
      this._router.navigate(['send-req']);

    },
    error =>{
      this.fail=true;
      console.log(error);
    }
    )
    
  }
}
