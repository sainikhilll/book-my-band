import { Injectable } from '@angular/core';
import { CurrentBand } from './approval/model/currentBand';
import { BandLoginService } from './band-login.service';
import { BandLoginComponent } from './band-login/band-login.component';

@Injectable({
  providedIn: 'root'
})
export class BandAuthService {
  bandSuccessfullyLoggedIn: CurrentBand | undefined;
  constructor(private bandLoginService: BandLoginService) { }
  login():void {
    let users =[];
    this.bandSuccessfullyLoggedIn ;
   //users = JSON.parse(localStorage.getItem('cband')) ;
  }

}
