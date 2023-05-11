import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SellerSignupComponent } from './components/seller-signup/seller-signup.component';

const routes: Routes = [
  {
    path:'seller-signup',
    component:SellerSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
