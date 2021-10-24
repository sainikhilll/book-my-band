import { Component, OnInit } from '@angular/core';
import { ShowBands } from './Model/ShowBand';


@Component({
  selector: 'app-show-bands',
  templateUrl: './show-bands.component.html',
  styleUrls: ['./show-bands.component.css']
})
export class ShowBandsComponent implements OnInit {
   bands: ShowBands = {
    name: "RockOn",
    member: 7,
    charge: 50000,

   };

  constructor(){}

  ngOnInit(): void {
  }

}
