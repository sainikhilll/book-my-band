import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBandsComponent } from './show-bands/show-bands.component';

const routes: Routes = [
  {path:'show-bands',component:ShowBandsComponent},
  {path:'', redirectTo: "/show-bands", pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
