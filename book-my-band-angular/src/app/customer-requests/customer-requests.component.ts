import { Component, OnInit } from '@angular/core';
import { CustomerrequestsService } from './customerrequests.service';
import { Customerrequests } from './model/customerRequests';

@Component({
  selector: 'app-customer-requests',
  templateUrl: './customer-requests.component.html',
  styleUrls: ['./customer-requests.component.css']
})
export class CustomerRequestsComponent implements OnInit {

  listCustomerRequests:Customerrequests[] | undefined;
  constructor(private service:CustomerrequestsService ) { }

  ngOnInit(): void {
    this.service.getCustDetails().subscribe
    (
      data=>
      {
        this.listCustomerRequests = data;
      }
    )

  }

}
