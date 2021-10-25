import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerrequestsService {
 constructor(private http:HttpClient) { } 
 getCustDetails(): Observable<any>{
  console.log( localStorage.getItem('cband'));
 let param1 = new HttpParams().set('custId',4);
 return this.http.get("http://localhost:8080/requests/customerreqs",{params:param1});
}


}
