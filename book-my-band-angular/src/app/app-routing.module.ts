import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerSignupComponent } from './customer-signup/customer-signup.component';


import { BandSignupComponent } from './band-signup/band-signup.component';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { ShowBandsComponent } from './show-bands/show-bands.component';

 


const routes: Routes = [
  {path:'show-bands',component:ShowBandsComponent},
  {path:'', redirectTo: "/show-bands", pathMatch: 'full'},
  {path:'signup',component:CustomerSignupComponent},
  {path:'band-signup',component:BandSignupComponent},
  {path:'requests',component:CustomerRequestsComponent},
  {path:'', redirectTo: "/show-bands", pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
