import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BandLogin } from '../approval/model/bandLogin';
import { CurrentBand } from '../approval/model/currentBand';
import { BandAuthService } from '../band-auth.service';
import { BandLoginService } from '../band-login.service';

@Component({
  selector: 'app-band-login',
  templateUrl: './band-login.component.html',
  styleUrls: ['./band-login.component.css']
})
export class BandLoginComponent implements OnInit {

  bandCurrentLogin: BandLogin={
    email:"",
    password:""
  }
  private _loggedInBand: CurrentBand={
    id:0,
    name:""
  }
  get loggedInBand(){
    return this._loggedInBand;
  }
  set loggedInBand(value: CurrentBand){
    this._loggedInBand = value;
  }
  error!: HttpErrorResponse;
  fail:boolean = false;
  constructor(private bandLoginService:BandLoginService ,private _router:Router, private bandAuthService: BandAuthService) { }

  ngOnInit(): void {
  }
  bandLoginButton():void{
    console.log(this.bandCurrentLogin);
    this.bandLoginService.checkLogin(this.bandCurrentLogin).subscribe(
     data=>{
      this._loggedInBand=data;
      localStorage.setItem('cband',JSON.stringify(this._loggedInBand));
      console.log(data);
      this.fail=false;
      this._router.navigate(['approval']);
      this.bandAuthService.bandlogin();
    },
    error =>{
      this.fail=true;
      console.log(error);
    }
    )
    
  }
}
