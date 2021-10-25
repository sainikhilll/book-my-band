import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerLogin } from './model/customer-login';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoginService {

  constructor(private httpClient : HttpClient) { }
  
  checkCustomerLogin (customerLoginDetails: CustomerLogin) : Observable<any>{
    return this.httpClient.post("http://localhost:8080/customers", customerLoginDetails);
  }
}

