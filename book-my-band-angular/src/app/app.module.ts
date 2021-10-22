import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprovalComponent } from './approval/approval.component';
import { BandService } from './band.service';


@NgModule({
  declarations: [
    AppComponent,
    ApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
