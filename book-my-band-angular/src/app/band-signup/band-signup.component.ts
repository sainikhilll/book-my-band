import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BandsignupService } from '../bandsignup.service';
import { BandUser } from './model/banduser';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-band-signup',
  templateUrl: './band-signup.component.html',
  styleUrls: ['./band-signup.component.css']
})
export class BandSignupComponent implements OnInit {

  userband : BandUser={
    name :"" ,
    email :"",
    password: "",
    contactNumber:"",
    members:0,
    charge:0
   
  }
  message: any

  signup = new FormGroup(
    {
      name: new FormControl('',[ Validators.required,Validators.pattern("[A-Za-z ]{1,32}")]),
      email: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" )]),
      contactNumber: new FormControl('', [Validators.required, Validators.pattern("[1-9]{1}[0-9]{9}"), Validators.maxLength(10)]),
      members:new FormControl('',[Validators.required,Validators.pattern("")]),
      charge:new FormControl('',[Validators.required,Validators.pattern("")]),

    }
  )

get name(){return this.signup.get('name')}
get email(){return this.signup.get('email')}
get password(){return this.signup.get('password')}
get contactNumber(){return this.signup.get('contactNumber')}
get members(){return this.signup.get('members')}
get charge(){return this.signup.get('charge')}

  constructor(private service:BandsignupService) { }

   ngOnInit(): void {

   }
public registerBand() {
  let reps = this.service.doRegistrationBand(this.userband);
  reps.subscribe((data) => this.message = data)
}

}

 