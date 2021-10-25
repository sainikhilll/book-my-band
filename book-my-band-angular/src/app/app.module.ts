import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApprovalComponent } from './approval/approval.component';
import { BandService } from './band.service';
import { ShowBandsComponent } from './show-bands/show-bands.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BandLoginComponent } from './band-login/band-login.component';
import { FormsModule } from '@angular/forms';

import { SendReqComponent } from './send-req/send-req.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerLoginComponent } from './customer-login/customer-login.component';




@NgModule({
  declarations: [
    AppComponent,
    ApprovalComponent,
    SendReqComponent,
    CustomerLoginComponent,
    ShowBandsComponent,
    NavBarComponent,
    BandLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
