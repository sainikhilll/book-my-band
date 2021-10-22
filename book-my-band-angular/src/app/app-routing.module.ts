import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandSignupComponent } from './band-signup/band-signup.component';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';

const routes: Routes = [
  {path:'',redirectTo:'signup',pathMatch:'full'},
  {path:'signup',component:BandSignupComponent},
  {path:'requests',component:CustomerRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
