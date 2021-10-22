import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bandrequests } from './approval/model/bandRequets';
import { CustomerDetails } from './approval/model/customerDetails';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private httpclient: HttpClient) { }

  getBandDetails(): Observable<any>{
    let param1 = new HttpParams().set('bandId',1);
    return this.httpclient.get("http://localhost:8080/bands",{params:param1});
  }

  approveCustomerRequest(cust: Bandrequests): Observable<any>
  {
    return this.httpclient.put("http://localhost:8080/bands",cust);
  }

  rejectCustomerRequest(cust: Bandrequests): Observable<any>{
    return this.httpclient.put("http://localhost:8080/bands",cust);
  }
}
