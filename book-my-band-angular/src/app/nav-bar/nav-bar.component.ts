import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BandAuthService } from '../band-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public bandAuthService:BandAuthService, private router:Router) { }

  ngOnInit(): void {
  }
  bandlogout():void{
    this.bandAuthService.bandlogout();
    this.router.navigate(['/app-band-login']);
  }
}
