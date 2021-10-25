import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerSignupComponent } from './customer-signup/customer-signup.component';


import { BandSignupComponent } from './band-signup/band-signup.component';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { ApprovalComponent } from './approval/approval.component';
import { BandLoginComponent } from './band-login/band-login.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { SendReqComponent } from './send-req/send-req.component';
import { ShowBandsComponent } from './show-bands/show-bands.component';

 


const routes: Routes = [
  {path:'send-req', component: SendReqComponent},
  {path:'customer-login', component: CustomerLoginComponent},
  {path:'show-bands',component:ShowBandsComponent},
  {path:'signup',component:CustomerSignupComponent},
  {path:'band-signup',component:BandSignupComponent},
  {path:'requests',component:CustomerRequestsComponent},
  {path:'approval',component: ApprovalComponent},
  {path:'app-band-login',component:BandLoginComponent},
  {path:'', redirectTo: "/show-bands", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
