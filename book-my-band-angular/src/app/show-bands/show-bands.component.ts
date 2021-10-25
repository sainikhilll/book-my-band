import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAuthService } from '../customer-auth.service';
import { ShowBandService } from '../show-band.service';
import { ShowBands } from './Model/ShowBand';


@Component({
  selector: 'app-show-bands',
  templateUrl: './show-bands.component.html',
  styleUrls: ['./show-bands.component.css']
})
export class ShowBandsComponent implements OnInit {
   bands:any;
   ccband!:ShowBands;

  constructor(private service:ShowBandService, private router:Router,private custAuthsService:CustomerAuthService){}

  ngOnInit(): void {
   let resp = this.service.getBands();
   console.log(resp);
   resp.subscribe((data)=>this.bands=data);

  }
  showbook(id:number) : void {
    if(this.custAuthsService.isCustLoggedIn){
    this.router.navigate(['send-req', id]);
  }
  else{
    this.router.navigate(['/customer-login'])
  }
}

}
