import { Component, OnInit } from '@angular/core';
import { BandService } from '../band.service';
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
  cust: Bandrequests = {
    id: 1,
    status: "approved",
    date: '',
    hours: 0,
    city: ''
  };

  rejectcust: Bandrequests = {
    id: 3,
    status: "rejected",
    date: '',
    hours: 0,
    city: ''
  };
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

  approve(id: number): void{
    console.log("approve Clicked",id);
    this.bandservice.approveCustomerRequest(this.cust).subscribe
    (
      data =>
      {
        this.approveCust = data;
      }
   )
   this.ngOnInit();
  }

  reject(): void{
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
