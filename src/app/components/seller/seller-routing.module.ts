import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { SellerHomeComponent } from './seller-home/seller-home.component';


const routes: Routes = [

  {
    path:'seller-signup',
    component:SellerSignUpComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
