import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalComponent } from './approval/approval.component';
import { BandLoginComponent } from './band-login/band-login.component';
import { ShowBandsComponent } from './show-bands/show-bands.component';

const routes: Routes = [
  {path:'show-bands',component:ShowBandsComponent},
  {path:'approval',component: ApprovalComponent},
  {path:'app-band-login',component:BandLoginComponent},
  {path:'', redirectTo: "/show-bands", pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
