import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAuthService } from '../customer-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public custAuthService: CustomerAuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  custLogout(): void{
    this.custAuthService.custlogout();
    this._router.navigate(['/customer-login'])
  }
}
