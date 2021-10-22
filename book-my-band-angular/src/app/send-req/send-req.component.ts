import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgserviceService } from '../ngservice.service';

export class Request {
  constructor (
    public id: number,
    // public name: string,
    public date: Date,
    public hours: number,
    public city: string
  ){
  }
}

@Component({
  selector: 'app-send-req',
  templateUrl: './send-req.component.html',
  styleUrls: ['./send-req.component.css']
})
export class SendReqComponent implements OnInit {
  closeResult !: string;
  requests!: Request[];
  
  constructor(
    private _service: NgserviceService,
    private _route:Router,
    private httpClient: HttpClient,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    // // this._service.fetchRequestList().subscribe(
    // //   data => console.log("response recieved"),
    // //   error => console.log("exception occured")
    // )
    this.getRequests();
  }
  getRequests(){
    this.httpClient.get<any>('http://localhost:8080/requests').subscribe(
      response => {
        console.log("response");
        this.requests = response;
      }
    );
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  goToAddRequest (): void {
    this._route.navigate(['/form-req']);
  }
  onSubmit (f:NgForm) {
    const url = 'http://localhost:8080/addrequests';
    this.httpClient.post(url, f.value)
    .subscribe((result) => {
      this.ngOnInit();
    });
    this.modalService.dismissAll ();
  }
}
