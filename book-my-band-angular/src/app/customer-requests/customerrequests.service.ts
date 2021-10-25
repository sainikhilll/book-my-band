import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentCustomer } from '../model/currentCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerrequestsService {
  currentLoggedInCustomer!:CurrentCustomer;
 constructor(private http:HttpClient) { } 
 getCustDetails(): Observable<any>{
  console.log( localStorage.getItem('cband'));
  this.currentLoggedInCustomer = JSON.parse( localStorage.getItem('cCust') || '{}');
 let param1 = new HttpParams().set('custId',this.currentLoggedInCustomer.id);
 return this.http.get("http://localhost:8080/requests/customerreqs",{params:param1});
}


}
