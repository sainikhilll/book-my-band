import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BandLogin } from './approval/model/bandLogin';
import { Bandrequests } from './approval/model/bandRequets';
import { CurrentBand } from './approval/model/currentBand';
import { CustomerDetails } from './approval/model/customerDetails';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  currentLoggedInBand!:CurrentBand;
  constructor(private httpclient: HttpClient) { }

  getBandDetails(): Observable<any>{
     console.log( localStorage.getItem('cband'));
    this.currentLoggedInBand = JSON.parse( localStorage.getItem('cband') || '{}');
    let param1 = new HttpParams().set('bandId',this.currentLoggedInBand.id);
    return this.httpclient.get("http://localhost:8080/requests",{params:param1});
  }

  approveCustomerRequest(cust: Bandrequests): Observable<any>
  {
    return this.httpclient.put("http://localhost:8080/requests",cust);
  }

  rejectCustomerRequest(cust: Bandrequests): Observable<any>{
    return this.httpclient.put("http://localhost:8080/requests",cust);
  }
}
