import { Component, OnInit } from '@angular/core';
import { BandService } from '../band.service';
import {  Customer } from './model/customer';
import { Bandrequests } from './model/bandRequets';
import { CustomerDetails } from './model/customerDetails';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  // customerDetails: CustomerDetails = {
  //   name:"Max",
  //   dateOfEvent: new Date(2021, 11, 10),
  //   noOfHours: 3,
  //   venue: "Hyderbad",
  //   approved:false
  // };
  id!:number;
  listCustomers: Bandrequests[] | undefined;
  approveCust: Bandrequests | undefined;
  cust: Bandrequests | undefined 

  rejectcust: Bandrequests | undefined
  rejectCust: Bandrequests | undefined;
  constructor(private bandservice: BandService) { }

  ngOnInit(): void {
    this.bandservice.getBandDetails().subscribe
    (
      data=>
      {
        this.listCustomers = data;
      }
    )
    
  }

  approve(rid: number): void{
    this.cust= {
      id: rid,
      customer: Customer,
      status: "approved",
      date: '',
      hours: 0,
      city: ''
    };
    console.log("approve Clicked",rid);
    this.bandservice.approveCustomerRequest(this.cust).subscribe
    (
      data =>
      {
        this.approveCust = data;
      }
   )
   this.ngOnInit();
  }

  reject(rid: number): void{
    this.rejectcust = {
      id: rid,
      customer: Customer,
      status: "rejected",
      date: '',
      hours: 0,
      city: ''
    };
    
      this.bandservice.rejectCustomerRequest(this.rejectcust).subscribe
      (
        data =>
        {
          this.rejectCust = data;
        }
     )
     console.log("Reject Clicked");
     this.ngOnInit();
    }
  

}
