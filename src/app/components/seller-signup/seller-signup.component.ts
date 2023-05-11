import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/data-type';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {
  constructor(private seller:SellerService
    ,private router:Router){

  }
  ngOnInit(): void {
    
  }

  signUp(data:SignUp):void{
   this.seller.userSignUp(data).subscribe((result)=>{
    if(result){
      this.router.navigate(['seller-home'])
    }
   });
  }

}
