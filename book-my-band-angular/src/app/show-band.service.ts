import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowBandService {

  constructor(private http:HttpClient) { }

  public getBands(){
    return this.http.get("http://localhost:8080/bands");
  }
}
