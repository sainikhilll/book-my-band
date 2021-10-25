import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupcustmoerService } from '../signupcustmoer.service';
import { User } from './Model/user';


@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  user: User = {
    name: "",
    email: "",
    password: "",
    contactNumber: "",
  }


  signup = new FormGroup(
    {
      name: new FormControl('',[ Validators.required,Validators.pattern("[A-Za-z ]{1,32}")]),
      email: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" )]),
      contactNumber: new FormControl('', [Validators.required, Validators.pattern("[1-9]{1}[0-9]{9}"), Validators.maxLength(10)]),

    }
  )

get name(){return this.signup.get('name')}
get email(){return this.signup.get('email')}
get password(){return this.signup.get('password')}
get contactNumber(){return this.signup.get('contact_number')}

 alert : boolean = false;
 err!:HttpErrorResponse;
 fail:boolean=false;
 
  message: any
  constructor(private service: SignupcustmoerService) { }

  ngOnInit(): void {

  }

  public registerNow() {
    let reps = this.service.doRegistration(this.user);
    reps.subscribe((data) =>{this.message = data;
    this.alert=true,this.signup.reset({})},
    err=>{
      this.fail=true;
    } )
    
  }


}
