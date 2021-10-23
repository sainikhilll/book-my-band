import { Component, OnInit } from '@angular/core';
import { ShowBandService } from '../show-band.service';
import { ShowBands } from './Model/ShowBand';


@Component({
  selector: 'app-show-bands',
  templateUrl: './show-bands.component.html',
  styleUrls: ['./show-bands.component.css']
})
export class ShowBandsComponent implements OnInit {
   bands:any;

  constructor(private service:ShowBandService){}

  ngOnInit(): void {
   let resp = this.service.getBands();
   console.log(resp);
   resp.subscribe((data)=>this.bands=data);

  }

}
