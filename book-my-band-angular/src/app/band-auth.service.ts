import { Injectable } from '@angular/core';
import { CurrentBand } from './approval/model/currentBand';
import { BandLoginService } from './band-login.service';
import { BandLoginComponent } from './band-login/band-login.component';

@Injectable({
  providedIn: 'root'
})
export class BandAuthService {
  bandLoggedIn: boolean = false;
  constructor(private bandLoginService: BandLoginService) { }
  bandlogin():void {
    this.bandLoggedIn = true ;
   //users = JSON.parse(localStorage.getItem('cband')) ;
  }

  bandlogout():void{
    this.bandLoggedIn = false;
  }
  get isBandLoggedIn():boolean{
    return this.bandLoggedIn;
  }
}
