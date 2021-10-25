import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandsignupService {

  constructor(private http:HttpClient) { }
  public doRegistrationBand(userband:any)
  {
    return this.http.post("http://localhost:8080/bands/addbands",userband,{responseType:'text' as 'json'});

  }


 
}
