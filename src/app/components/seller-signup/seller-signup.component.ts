import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {
  constructor(private seller:SellerService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  signUp(data:object):void{
    this.seller.userSignUp(data)
  }

}
