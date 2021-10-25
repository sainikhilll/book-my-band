import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SignupcustmoerService {
  constructor(private http:HttpClient) { }
  public doRegistration(user:any)
  {
    return this.http.post("http://localhost:8081/customers",user,{responseType:'text' as 'json'});

  }
}
