import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BandLogin } from './approval/model/bandLogin';
import { CurrentBand } from './approval/model/currentBand';
import { BandLoginComponent } from './band-login/band-login.component';

@Injectable({
  providedIn: 'root'
})
export class BandLoginService {
  
  constructor(private httpClient: HttpClient) { }

  checkLogin(bandLoginDetails:BandLogin): Observable<any>{
    return this.httpClient.post("http://localhost:8080/bands",bandLoginDetails);
  }
  
}
