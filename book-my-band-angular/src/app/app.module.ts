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
import { ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,

    CustomerSignupComponent,

    CustomerRequestsComponent,
    BandSignupComponent,
    ShowBandsComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShowBandService,SignupcustmoerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
