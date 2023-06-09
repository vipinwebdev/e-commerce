import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './src/app/components/home/home.component';


const routes: Routes = [
 
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'seller',
    loadChildren: () => import('./components/seller/seller.module').then(m => m.SellerModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
