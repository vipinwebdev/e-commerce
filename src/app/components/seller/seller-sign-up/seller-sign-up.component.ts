import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login, SignUp } from 'src/app/data-type';
import { SellerService } from 'src/app/services/seller.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller-sign-up',
  templateUrl: './seller-sign-up.component.html',
  styleUrls: ['./seller-sign-up.component.css']
})
export class SellerSignUpComponent {
  isRegistered=true;
  authenticationError='';
  
  constructor(private seller:SellerService
    ,private router:Router,){

  }
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data:SignUp):void{
   this.seller.userSignUp(data);
  
  }
  login(data:Login):void{
   console.warn(data);
   if(data.email== "")
   this.authenticationError='Please enter email !'
      else if(data.password=="")
       this.authenticationError='Please enter password !'
        else{
          this.seller.userLogin(data);
          this.seller.isLoginError.subscribe((error)=>{
              if(error){
                this.authenticationError="Email and password doesn't match. Please try again!"
              }
          })
        }
  }
  toggleLoginSignUp():void{
    this.authenticationError="";
    this.isRegistered =!this.isRegistered;
  }
}
