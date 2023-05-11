import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SellerSignupComponent } from './components/seller-signup/seller-signup.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {
    path:'seller-signup',
    component:SellerSignupComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
