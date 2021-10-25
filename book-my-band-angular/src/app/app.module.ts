import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { BandSignupComponent } from './band-signup/band-signup.component';

import { ShowBandsComponent } from './show-bands/show-bands.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupcustmoerService } from './signupcustmoer.service';
import { ShowBandService } from './show-band.service';
import { ReactiveFormsModule} from '@angular/forms';;

import { ApprovalComponent } from './approval/approval.component';
import { BandService } from './band.service';

import { BandLoginComponent } from './band-login/band-login.component';
import { FormsModule } from '@angular/forms';

import { SendReqComponent } from './send-req/send-req.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerLoginComponent } from './customer-login/customer-login.component';




@NgModule({
  declarations: [
    AppComponent,

    CustomerSignupComponent,

    CustomerRequestsComponent,
    BandSignupComponent,
    ShowBandsComponent,
    NavBarComponent,

    ApprovalComponent,
    SendReqComponent,
    CustomerLoginComponent,
    BandLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ShowBandService,SignupcustmoerService,BandService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
