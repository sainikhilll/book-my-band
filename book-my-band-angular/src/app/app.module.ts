import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { BandSignupComponent } from './band-signup/band-signup.component';

import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule} from '@angular/forms';

import { ShowBandsComponent } from './show-bands/show-bands.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerRequestsComponent,
    BandSignupComponent,
    ShowBandsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
